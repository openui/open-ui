import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import './community-links.css'

const iconStyle = {
  width: '24px',
  height: '24px',
}

export default function CommunityLinks({ className = '' }) {
  return (
    <div className={'community-links ' + className}>
      <a href="https://github.com/openui/open-ui" title="GitHub" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faGithub} />
      </a>

      <a href="https://discord.gg/DEWjhSw" title="Discord" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faDiscord} />
      </a>

      <a href="https://x.com/openuicg" title="X" rel="noreferrer noopener">
        <FontAwesomeIcon style={iconStyle} icon={faXTwitter} />
      </a>
    </div>
  )
}
