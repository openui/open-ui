import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import './community-links.css'

const githubURL = 'https://github.com/openui/open-ui'

const iconStyle = {
  marginRight: '0.2em',
  width: '16px',
}

export default function CommunityLinks({ className = '' }) {
  return (
    <div className={'community-links ' + className}>
      <a href={githubURL} rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faGithub} /> GitHub
      </a>

      <a
        href="https://discord.gg/DEWjhSw"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon style={iconStyle} icon={faDiscord} /> Discord
      </a>
    </div>
  )
}
