import { useStore } from '@nanostores/react'
import { isMenuOpen } from '../state/menuState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './toggle-menu-button.css'

function ToggleMenuButton() {
  const $isMenuOpen = useStore(isMenuOpen)
  const onToggleMenu = () => isMenuOpen.set(!$isMenuOpen)

  return (
    <button
      type="button"
      className="header-menu-btn"
      aria-label="Toggle menu"
      title="Toggle menu"
      onClick={onToggleMenu}
      aria-expanded={isMenuOpen ? 'true' : 'false'}
      aria-controls="site-nav"
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

export default ToggleMenuButton
