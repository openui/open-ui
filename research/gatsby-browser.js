const AnchorJS = require('anchor-js')

const anchors = new AnchorJS({
  placement: 'left',
})

exports.onRouteUpdate = (location, prevLocation) => {
  anchors.add()
}

exports.onClientEntry = (...args) => {
  console.log('onClientEntry')
  // Add anchors on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    anchors.add()
  })
}
