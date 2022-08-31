import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './logo'
import CommunityLinks from './community-links'
import { useStore } from '@nanostores/react'
import { isCartOpen } from '../cartStore'

const Header = () => {
  return (
    <header
      style={{
        background: '#333',
        marginBottom: '2rem',
        color: '#eee',
      }}
    >
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          margin: '0 auto',
          maxWidth: 1200,
          width: '100%',
          justifyItems: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ flex: 1 }}>
          <Logo />
        </span>

        <CommunityLinks />

        <button
          type="button"
          className="header-menu-btn"
          aria-label="Toggle menu"
          title="Toggle menu"
          onClick={onToggleMenu}
          aria-expanded={menuOpened ? 'true' : 'false'}
          aria-controls="site-nav"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
    </header>
  )
}

export default Header
