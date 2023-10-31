import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './community-links.css'

const iconStyle = {
  marginRight: '0.2em',
  width: '16px',
}

export default function CommunityLinks({ className = '' }) {
  return (
    <div className={'community-links ' + className}>
      <a href="https://github.com/openui/open-ui" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faGithub} /> GitHub
      </a>

      <a href="https://discord.gg/DEWjhSw" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faDiscord} /> Discord
      </a>

      <a href="https://x.com/openuicg" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faXTwitter} /> X
      </a>
    </div>
  )
}
