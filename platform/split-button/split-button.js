import createTemplate from '/platform/helpers/create-template.js'

class SplitButton extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    createTemplate('/platform/split-button/split-button-template.html').then((template) => {
      this.shadow.appendChild(template.cloneNode(true))

      // We only want the arrow to be propagating click events
      let text = this.shadow.querySelector('#text-wrapper')
      text.addEventListener('click', (e) => {console.log('text'); e.stopPropagation()})

    })
  }
}

export default SplitButton;