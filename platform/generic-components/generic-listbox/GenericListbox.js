import { KEYCODES } from '../utils/keycodes.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>

  </style>
  <slot>
  </slot>
`;

export class GenericListbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.__index = 0;
  }

  connectedCallback() {
    this.__ul = this.__getUl();
    this.__li = this.__getLi();

    this.__ul.setAttribute('tabindex', '0');
    this.__ul.setAttribute('role', 'listbox');

    if (this.hasAttribute('label')) {
      this.__ul.setAttribute('aria-label', this.getAttribute('label'));
    }

    this.addEventListener('keydown', this.__onKeyDown.bind(this));
    this.addEventListener('click', this.__onClick.bind(this));

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

  __onClick(event) {
    if (!event.target.localName.includes('li')) return;
    this.__index = this.__li.indexOf(event.target);
    this.setAttribute('selected', this.__index);
  }

  __onKeyDown(event) {
    if (!event.target.localName.includes('ul')) return;
    switch (event.keyCode) {
      case KEYCODES.UP:
        if (this.__index === 0) {
          this.__index = this.__li.length - 1;
        } else {
          this.__index--; // eslint-disable-line
        }
        event.preventDefault();
        break;
      case KEYCODES.DOWN:
        if (this.__index === this.__li.length - 1) {
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
        this.__index = this.__li.length - 1;
        break;
      default:
        return;
    }

    this.setAttribute('selected', this.__index);
  }

  __updateActive() {
    const ul = this.__getUl();
    const li = this.__getLi();

    if (!ul || !li) return;
    li.forEach((el, i) => {
      li[i].id = `generic-listbox-${i}`;
      li[i].setAttribute('role', 'option');

      if (i === this.__index) {
        this.setAttribute('selected', this.__index);
        li[i].setAttribute('aria-selected', 'true');
        li[i].setAttribute('selected', '');
        ul.setAttribute('aria-activedescendant', li[i].id);
        this.__scrollIntoView(li[i]);
        this.value = li[i].textContent.trim();
      } else {
        li[i].removeAttribute('aria-selected');
        li[i].removeAttribute('selected');
      }
    });

    const { __index } = this;
    this.dispatchEvent(
      new CustomEvent('selected-changed', {
        detail: __index,
      }),
    );
  }

  __scrollIntoView(li) {
    const ul = this.__getUl();
    if (ul.scrollHeight > ul.clientHeight) {
      const elOffsetBottom = li.offsetTop - ul.offsetTop + li.clientHeight;
      const elOffsetTop = li.offsetTop - ul.offsetTop;

      if (elOffsetTop < ul.scrollTop) {
        ul.scrollTop = elOffsetTop;
      }

      if (elOffsetBottom > ul.scrollTop + ul.clientHeight) {
        if (ul.clientHeight - elOffsetTop < 0) {
          ul.scrollTop = elOffsetBottom - ul.clientHeight;
        } else {
          ul.scrollTop = ul.clientHeight - elOffsetTop;
        }
      }
    }
  }

  __getUl() {
    return this.querySelector('ul');
  }

  __getLi() {
    return [...this.querySelectorAll('ul li')];
  }

  get selected() {
    return this.__index;
  }

  set selected(val) {
    this.__index = val;
    this.setAttribute('selected', this.__index);
  }
}
