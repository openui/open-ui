export class GenericVisuallyHidden extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.removeAttribute('hidden');
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          height: 1px;
          width: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
        }
      </style>

      <slot></slot>
    `;
  }
}
