import createTemplate from '/platform/helpers/create-template.js'

let css = `
  :host {
    position: relative;
    display: inline-block;
  }
`

class ListBox extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.shadow.append(document.createElement('style'))
    this.shadow.querySelector('style').append(css)
    createTemplate('/platform/select/list-box-template.html').then((template) => {
      this.shadow.appendChild(template.cloneNode(true))

      let button = this.shadow.querySelector('button-wrapper');
      let popup = this.shadow.querySelector('pop-up');

      this.addEventListener('click', (e) => {
        console.log(e.target)
        if (button === e.target) {
          return
        }
        else {
          popup.classList.toggle('visible');
        }
      })
    })
  }
}

export default ListBox;