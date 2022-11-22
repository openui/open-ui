import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

const githubURL = 'https://github.com/openui/open-ui'

const iconStyle = {
  marginRight: '0.2em',
  width: '16px',
}

const linkStyle = { color: 'inherit', display: 'flex', alignItems: 'center' }

export default function CommunityLinks({ className = '' }) {
  return (
    <div className={'community-links ' + className}>
      <a href={githubURL} target="_blank" rel="noreferrer noopener" style={linkStyle}>
        <FontAwesomeIcon style={iconStyle} icon={faGithub} /> GitHub
      </a>

      <a
        href="https://discord.gg/DEWjhSw"
        target="_blank"
        rel="noreferrer noopener"
        style={linkStyle}
      >
        <FontAwesomeIcon style={{ ...iconStyle, marginLeft: '1em' }} icon={faDiscord} /> Discord
      </a>
    </div>
  )
}
