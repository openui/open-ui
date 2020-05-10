/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
  const matches = [];
  // If the depth is above the max depth, abort the searching here.
  if (depth >= maxDepth) {
    return matches;
  }
  // Traverses a slot element
  const traverseSlot = $slot => {
    // Only check nodes that are of the type Node.ELEMENT_NODE
    // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
    if (assignedNodes.length > 0) {
      return queryShadowRoot(
        assignedNodes[0].parentElement,
        skipNode,
        isMatch,
        maxDepth,
        depth + 1,
      );
    }
    return [];
  };
  // Go through each child and continue the traversing if necessary
  // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
  // Therefore we fallback to an empty array if it is undefined.
  const children = Array.from(root.children || []);
  for (const $child of children) {
    // Check if the node and its descendants should be skipped
    if (skipNode($child)) {
      continue;
    }
    // If the child matches we always add it
    if (isMatch($child)) {
      matches.push($child);
    }
    if ($child.shadowRoot != null) {
      matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
    } else if ($child.tagName === 'SLOT') {
      matches.push(...traverseSlot($child));
    } else {
      matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
    }
  }
  return matches;
}

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
  return (
    $elem.hasAttribute('hidden') ||
    ($elem.hasAttribute('aria-hidden') && $elem.getAttribute('aria-hidden') !== 'false') ||
    // A quick and dirty way to check whether the element is hidden.
    // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
    // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
    // we won't be able to catch it here. We accept it due to the huge performance benefits.
    $elem.style.display === `none` ||
    $elem.style.opacity === `0` ||
    $elem.style.visibility === `hidden` ||
    $elem.style.visibility === `collapse`
  );
  // If offsetParent is null we can assume that the element is hidden
  // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
  // || $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
  return (
    $elem.hasAttribute('disabled') ||
    ($elem.hasAttribute('aria-disabled') && $elem.getAttribute('aria-disabled') !== 'false')
  );
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
  // Discard elements that are removed from the tab order.
  if ($elem.getAttribute('tabindex') === '-1' || isHidden($elem) || isDisabled($elem)) {
    return false;
  }
  return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute('tabindex') ||
    // Anchor tags or area tags with a href set
    (($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) &&
      $elem.hasAttribute('href')) ||
    // Form elements which are not disabled
    ($elem instanceof HTMLButtonElement ||
      $elem instanceof HTMLInputElement ||
      $elem instanceof HTMLTextAreaElement ||
      $elem instanceof HTMLSelectElement) ||
    // IFrames
    $elem instanceof HTMLIFrameElement
  );
}

const timeouts = new Map();
/**
 * Debounces a callback.
 * @param cb
 * @param ms
 * @param id
 */
function debounce(cb, ms, id) {
  // Clear current timeout for id
  const timeout = timeouts.get(id);
  if (timeout != null) {
    window.clearTimeout(timeout);
  }
  // Set new timeout
  timeouts.set(
    id,
    window.setTimeout(() => {
      cb();
      timeouts.delete(id);
    }, ms),
  );
}

/**
 * Template for the focus trap.
 */
const template = document.createElement('template');
template.innerHTML = `
	<div id="start"></div>
	<div id="backup"></div>
	<slot></slot>
	<div id="end"></div>
`;
/**
 * Focus trap web component.
 * @customElement focus-trap
 * @slot - Default content.
 */
class FocusTrap extends HTMLElement {
  /**
   * Attaches the shadow root.
   */
  constructor() {
    super();
    // The debounce id is used to distinguish this focus trap from others when debouncing
    this.debounceId = Math.random().toString();
    this._focused = false;
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.$backup = shadow.querySelector('#backup');
    this.$start = shadow.querySelector('#start');
    this.$end = shadow.querySelector('#end');
    this.focusLastElement = this.focusLastElement.bind(this);
    this.focusFirstElement = this.focusFirstElement.bind(this);
    this.onFocusIn = this.onFocusIn.bind(this);
    this.onFocusOut = this.onFocusOut.bind(this);
  }

  // Whenever one of these attributes changes we need to render the template again.
  static get observedAttributes() {
    return ['inactive'];
  }

  /**
   * Determines whether the focus trap is active or not.
   * @attr
   */
  get inactive() {
    return this.hasAttribute('inactive');
  }

  set inactive(value) {
    value ? this.setAttribute('inactive', '') : this.removeAttribute('inactive');
  }

  /**
   * Returns whether the element currently has focus.
   */
  get focused() {
    return this._focused;
  }

  /**
   * Hooks up the element.
   */
  connectedCallback() {
    this.$start.addEventListener('focus', this.focusLastElement);
    this.$end.addEventListener('focus', this.focusFirstElement);
    // Focus out is called every time the user tabs around inside the element
    this.addEventListener('focusin', this.onFocusIn);
    this.addEventListener('focusout', this.onFocusOut);
    this.render();
  }

  /**
   * Tears down the element.
   */
  disconnectedCallback() {
    this.$start.removeEventListener('focus', this.focusLastElement);
    this.$end.removeEventListener('focus', this.focusFirstElement);
    this.removeEventListener('focusin', this.onFocusIn);
    this.removeEventListener('focusout', this.onFocusOut);
  }

  /**
   * When the attributes changes we need to re-render the template.
   */
  attributeChangedCallback() {
    this.render();
  }

  /**
   * Focuses the first focusable element in the focus trap.
   */
  focusFirstElement() {
    this.trapFocus();
  }

  /**
   * Focuses the last focusable element in the focus trap.
   */
  focusLastElement() {
    this.trapFocus(true);
  }

  /**
   * Returns a list of the focusable children found within the element.
   */
  getFocusableElements() {
    return queryShadowRoot(this, isHidden, isFocusable);
  }

  /**
   * Focuses on either the last or first focusable element.
   * @param {boolean} trapToEnd
   */
  trapFocus(trapToEnd) {
    if (this.inactive) return;
    const focusableChildren = this.getFocusableElements();
    if (focusableChildren.length > 0) {
      if (trapToEnd) {
        focusableChildren[focusableChildren.length - 1].focus();
      } else {
        focusableChildren[0].focus();
      }
      this.$backup.setAttribute('tabindex', '-1');
    } else {
      // If there are no focusable children we need to focus on the backup
      // to trap the focus. This is a useful behavior if the focus trap is
      // for example used in a dialog and we don't want the user to tab
      // outside the dialog even though there are no focusable children
      // in the dialog.
      this.$backup.setAttribute('tabindex', '0');
      this.$backup.focus();
    }
  }

  /**
   * When the element gains focus this function is called.
   */
  onFocusIn() {
    this.updateFocused(true);
  }

  /**
   * When the element looses its focus this function is called.
   */
  onFocusOut() {
    this.updateFocused(false);
  }

  /**
   * Updates the focused property and updates the view.
   * The update is debounced because the focusin and focusout out
   * might fire multiple times in a row. We only want to render
   * the element once, therefore waiting until the focus is "stable".
   * @param value
   */
  updateFocused(value) {
    debounce(
      () => {
        if (this.focused !== value) {
          this._focused = value;
          this.render();
        }
      },
      0,
      this.debounceId,
    );
  }

  /**
   * Updates the template.
   */
  render() {
    this.$start.setAttribute('tabindex', !this.focused || this.inactive ? `-1` : `0`);
    this.$end.setAttribute('tabindex', !this.focused || this.inactive ? `-1` : `0`);
    this.focused ? this.setAttribute('focused', '') : this.removeAttribute('focused');
  }
}
window.customElements.define('focus-trap', FocusTrap);

export { FocusTrap, isDisabled, isFocusable, isHidden, queryShadowRoot };
