/**
 * @example
 * class FooBar extends RovingTabindexMixin(HTMLElement) {
 *   constructor() {
 *     super();
 *     this.attachShadow({ mode: "open" });
 *     this.shadowRoot.innerHTML = `
 *       <slot></slot>
 *     `;
 *   }
 *
 *   tabbableItems() {
 *     return "button";
 *   }
 *
 *   tabbableCallback(element) {
 *     if (element.hasAttribute("active")) {
 *       element.setAttribute("foo", "");
 *     } else {
 *       element.removeAttribute("foo");
 *     }
 *   }
 * }
 *
 * <foo-bar>
 *  <button>1</button>
 *  <button>2</button>
 *  <button>3</button>
 * </foo-bar>
 */

import { KEYCODES } from './keycodes.js';

export const RovingTabindexMixin = superclass =>
  // eslint-disable-next-line
  class RovingTabindexMixin extends superclass {
    constructor() {
      super();
      this.__index = 0;
      if (!this.tabbableItems) {
        throw new Error('No queryselector for tabbable items provided');
      }
    }

    connectedCallback() {
      if (super.connectedCallback) super.connectedCallback();
      this.addEventListener('keydown', this.__onKeyDown.bind(this));
      this.addEventListener('click', this.__onElClicked.bind(this));
      this.__updateActive(false);
    }

    __onElClicked(e) {
      if (e.target.localName() !== this.tabbableItems()) return;
      this.__index = this.__getElements().indexOf(e.target);
      this.__updateActive(true);
    }

    __onKeyDown(event) {
      const elements = this.__getElements();

      switch (event.keyCode) {
        case KEYCODES.LEFT:
          if (this.__index === 0) {
            this.__index = elements.length - 1;
          } else {
            this.__index--; // eslint-disable-line
          }
          break;

        case KEYCODES.RIGHT:
          if (this.__index === elements.length - 1) {
            this.__index = 0;
          } else {
            this.__index++; // eslint-disable-line
          }
          break;

        case KEYCODES.HOME:
          this.__index = 0;
          break;

        case KEYCODES.END:
          this.__index = elements.length - 1;
          break;
        default:
          return;
      }
      this.__updateActive(true);
    }

    __getElements() {
      return [...this.querySelectorAll(this.tabbableItems())];
    }

    /**
     * Should return a querySelector for the tabbable items
     * @example
     * return 'button';
     *
     * @returns {string}
     */
    tabbableItems() {} // eslint-disable-line

    /**
     * Fires for each tabbable item when the active item changes
     * @example
     *
     * tabbableCallback(element) {
     *   if (element.hasAttribute("active")) {
     *     element.setAttribute("foo", "");
     *   } else {
     *     element.removeAttribute("foo");
     *   }
     * }
     *
     * @param element {Element}
     */
    tabbableCallback(element) {} // eslint-disable-line

    __updateActive(focus) {
      const elements = this.__getElements();

      elements.forEach((_, i) => {
        if (i === this.__index) {
          if (focus) {
            elements[i].focus();
          }
          elements[i].setAttribute('active', '');
          elements[i].setAttribute('aria-selected', 'true');
          elements[i].removeAttribute('tabindex');
        } else {
          elements[i].removeAttribute('active');
          elements[i].setAttribute('aria-selected', 'false');
          elements[i].setAttribute('tabindex', '-1');
        }
        this.tabbableCallback(elements[i]);
      });
    }
  };
