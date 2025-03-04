import { useState } from 'preact/hooks'
import { apply, isSupported } from 'invokers-polyfill/fn'

if (typeof window !== 'undefined') {
  if (!isSupported()) apply()
}

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
