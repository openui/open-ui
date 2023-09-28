import React from 'react'
import { sources } from '../sources'
import './design-systems-list.css'

const DesignSystemsList = (props) => {
  return (
    <div>
      {sources.map((source) => (
        <div key={source.name} className="design-system-item">
          <strong>
            <a target="_blank" rel="noopener noreferrer" href={source.url}>
              {source.name}
            </a>
          </strong>
          by {source.by}
          <div className="design-system-description">{source.description}</div>
        </div>
      ))}
    </div>
  )
}

export default DesignSystemsList
