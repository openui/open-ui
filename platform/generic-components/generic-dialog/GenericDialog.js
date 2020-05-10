import { dialog } from './dialog.js';

const template = document.createElement('template');
template.innerHTML = `
  <slot name="invoker">
    <button>open dialog</button>
  </slot>   

  <slot hidden name="content">
  </slot>   
`;

export class GenericDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const invoker = this.shadowRoot.querySelector('slot[name="invoker"]');
    const content = this.shadowRoot.querySelector('slot[name="content"]');

    invoker.addEventListener('click', e => {
      dialog.open({
        invokerNode: e.target,
        content: dialogNode => {
          content.assignedNodes().forEach(element => {
            const cloned = element.cloneNode(true);
            cloned.removeAttribute('hidden');
            dialogNode.append(cloned);
          });
        },
      });
    });
  }
}
