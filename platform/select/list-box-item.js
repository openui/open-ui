let css = `
  :host {
    display: block;
  }`

class ListBoxItem extends HTMLElement {

  constructor() {
    super()

    //this.setAttribute('aria-role', 'button')
    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.shadow.append(document.createElement('style'))
    this.shadow.querySelector('style').append(css)
    this.setAttribute('slot', 'options')
    this.shadow.appendChild(document.createElement('slot'))
  }
}

export default ListBoxItem;