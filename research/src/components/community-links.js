import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function CommunityLinks({ githubURL, className = '' }) {
  return (
    <div className={'community-links ' + className}>
      <a href={githubURL} target="_blank" rel="noreferrer noopener" style={{ color: 'inherit' }}>
        <FontAwesomeIcon style={{ marginRight: '0.2em' }} icon={faGithub} /> GitHub
      </a>

      <a
        href="https://discord.gg/DEWjhSw"
        target="_blank"
        rel="noreferrer noopener"
        style={{ color: 'inherit' }}
      >
        <FontAwesomeIcon style={{ marginRight: '0.2em', marginLeft: '1em' }} icon={faDiscord} />{' '}
        Discord
      </a>
    </div>
  )
}
