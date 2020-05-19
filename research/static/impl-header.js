// add button to set focus
// add heading to move using vc

setTimeout(() => {
  var root = document.getElementById('root')
  var container = root.parentElement
  var header = document.createElement('h4')
  header.innerHTML = 'Heading for navigation'
  var anchor = document.createElement('a')
  anchor.setAttribute('href', document.location.href)
  anchor.setAttribute('target', '_blank')
  anchor.setAttribute('tabindex', '0')
  anchor.innerHTML = 'Open in new tab'
  container.insertBefore(anchor, root)
  container.insertBefore(header, root)
}, 500)
