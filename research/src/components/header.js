import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle, githubURL }) => (
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
        <Logo siteTitle={siteTitle} />
      </span>

      <a href={githubURL} target="_blank" rel="noreferrer noopener" style={{ color: 'inherit' }}>
        <FontAwesomeIcon style={{ marginRight: '0.2em' }} icon={faGithub} /> GitHub
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
}

export default Header
