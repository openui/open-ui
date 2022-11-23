import { useStore } from '@nanostores/react'
import React from 'react'
import { isMenuOpen } from '../../state/menuState'

function NavigationContainer(props) {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <nav id="site-nav" className={$isMenuOpen ? 'opened' : ''}>
      {props.children}
    </nav>
  )
}

export default NavigationContainer
