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
      <h1 style={{ flex: 1, margin: 0, fontSize: '1rem' }}>
        <Logo siteTitle={siteTitle} />
      </h1>

      <a href={githubURL} target="_blank" rel="noreferrer noopener">
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
