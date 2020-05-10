import { KEYCODES } from '../utils/keycodes.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    ::slotted(button) {
      display: block;
      width: 100%;
    }

    :host {
      display: block;
    }
  </style>
  <slot>
  </slot>
`;

export class GenericAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.hasAttribute('selected')) {
      this.__index = Number(this.getAttribute('selected'));
    } else {
      this.__index = 0;
    }

    this.addEventListener('keydown', this.__onKeyDown.bind(this));
    this.addEventListener('click', this.__onClick.bind(this));
    this.addEventListener('focusin', this.__onFocus.bind(this));
    this.__buttons = [...this.querySelectorAll('button')];
    this.__regions = [...this.querySelectorAll('[role="region"]')];

    this.setAttribute('selected', this.__index);
  }

  static get observedAttributes() {
    return ['selected'];
  }

  attributeChangedCallback(name, newVal, oldVal) {
    if (name === 'selected') {
      if (newVal !== oldVal) {
        this.__index = Number(this.getAttribute('selected'));
        this.__updateActive();
      }
    }
  }

  __onFocus(event) {
    if (!event.target.id.startsWith('generic-accordion-')) return;
    this.__index = this.__buttons.indexOf(event.target);
  }

  __onClick(event) {
    if (!event.target.id.startsWith('generic-accordion-')) return;
    this.__index = this.__buttons.indexOf(event.target);
    this.setAttribute('selected', this.__index);
    this.__moveFocus();
  }

  __onKeyDown(event) {
    if (!event.target.id.startsWith('generic-accordion-')) return;
    switch (event.keyCode) {
      case KEYCODES.UP:
        if (this.__index === 0) {
          this.__index = this.__buttons.length - 1;
        } else {
          this.__index--; // eslint-disable-line
        }
        event.preventDefault();
        break;
      case KEYCODES.DOWN:
        if (this.__index === this.__buttons.length - 1) {
          this.__index = 0;
        } else {
          this.__index++; // eslint-disable-line
        }
        event.preventDefault();
        break;

      case KEYCODES.HOME:
        this.__index = 0;
        break;

      case KEYCODES.END:
        this.__index = this.__buttons.length - 1;
        break;
      default:
        return;
    }

    this.__moveFocus();
  }

  __moveFocus() {
    this.__buttons[this.__index].focus();
  }

  __updateActive() {
    const buttons = this.__getButtons();
    const regions = this.__getRegions();

    if (!buttons || !regions) return;
    buttons.forEach((el, i) => {
      if (i === this.__index) {
        this.setAttribute('selected', this.__index);
        buttons[i].setAttribute('selected', '');
        buttons[i].setAttribute('aria-expanded', 'true');
        buttons[i].setAttribute('aria-disabled', 'true');
        regions[i].hidden = false;
        this.value = buttons[i].textContent.trim();
      } else {
        buttons[i].setAttribute('aria-expanded', 'false');
        buttons[i].removeAttribute('aria-disabled');
        buttons[i].removeAttribute('selected');
        regions[i].hidden = true;
      }

      if (!buttons[i].id.startsWith('generic-accordion-')) {
        buttons[i].id = `generic-accordion-${i}`;
        regions[i].setAttribute('aria-labelledby', `generic-accordion-${i}`);
      }
    });

    const { __index } = this;
    this.dispatchEvent(
      new CustomEvent('selected-changed', {
        detail: __index,
      }),
    );
  }

  __getButtons() {
    return [...this.querySelectorAll('button')];
  }

  __getRegions() {
    return [...this.querySelectorAll('[role="region"]')];
  }

  get selected() {
    return this.__index;
  }

  set selected(val) {
    this.__index = val;
    this.setAttribute('selected', this.__index);
  }
}
