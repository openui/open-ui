const AnchorJS = require('anchor-js')

const anchors = new AnchorJS({
  placement: 'left',
})

exports.onRouteUpdate = (location, prevLocation) => {
  anchors.add('h1, h2, h3, h4')
}

exports.onClientEntry = (...args) => {
  // Add anchors on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    anchors.add()
  })
}
