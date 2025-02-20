import { useSignal } from '@preact/signals'
import { useEffect, useRef } from 'preact/hooks'

function NavigationContainer(props) {
  const isMenuOpen = useSignal(false)
  const navRef = useRef(null)

  useEffect(() => {
    function handleCommand(e) {
      if (e.command === '--toggle-menu') {
        isMenuOpen.value = !isMenuOpen.value
        e.source.setAttribute('aria-expanded', isMenuOpen.value)
      }
    }

    if (navRef.current) {
      navRef.current.addEventListener('command', handleCommand)
    }

    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener('command', handleCommand)
      }
    }
  })

  return (
    <nav ref={navRef} id="site-nav" className={isMenuOpen.value ? 'opened' : ''}>
      {props.children}
    </nav>
  )
}

export default NavigationContainer
