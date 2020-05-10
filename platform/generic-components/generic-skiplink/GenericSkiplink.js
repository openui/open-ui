export class GenericSkiplink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['for'];
  }

  attributeChangedCallback(name) {
    if (name === 'for') {
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        a {
          background-color: white;
          border-radius: 5px;
          padding: 10px 20px 10px 20px;
          position: absolute;
          left: -999px;
          width: 1px;
          height: 1px;
          top: auto;
        }

        a:focus {
          top: 0px;
          left: 0px;
          height: auto;
          width: auto;
          margin: auto;
        }
      </style>

      <a
        part="anchor"
        class="skiplink"
        href="#${this.getAttribute('for')}">
          <slot>Continue to main</slot>
      </a>
    `;
  }
}
