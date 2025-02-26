import { useState } from 'preact/hooks'
import 'invokers-polyfill'

function NavigationContainer(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleCommand(e) {
    if (e.command === '--toggle-menu') {
      setIsMenuOpen(!isMenuOpen)
      e.source.setAttribute('aria-expanded', isMenuOpen)
    }
  }

  return (
    <nav onCommand={handleCommand} id="site-nav" className={isMenuOpen ? 'opened' : ''}>
      {props.children}
    </nav>
  )
}

export default NavigationContainer
