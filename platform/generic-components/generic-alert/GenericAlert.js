const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 10px;
      border: 1px solid hsl(206, 74%, 54%);
      border-radius: 4px;
      background: hsl(206, 74%, 90%);
    }

  </style>
  <div>
    <slot></slot>
  </div>
`;

export class GenericAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'alert');
    }
    if (!this.hasAttribute('aria-live')) {
      this.setAttribute('aria-live', 'assertive');
    }
    if (!this.hasAttribute('aria-atomic')) {
      this.setAttribute('aria-atomic', 'true');
    }
  }
}
