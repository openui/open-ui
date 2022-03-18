import React from 'react'
import { sources } from '../sources'
import _ from 'lodash'

const DesignSystemsList = (props) => {
    const colStyle = { paddingTop: '1rem' }
    const descriptionStyle = { paddingTop: '0.25rem', paddingBottom: '0.25rem' }
    return (
        <div>
            {_.map(sources, (source) => (
                <div key={source.name} style={colStyle}>
                    <strong>
                        <a target="_blank" rel="noopener noreferrer" href={source.url}>
                            {source.name}
                        </a>
                    </strong> by {source.by}
                    <div style={descriptionStyle}>
                        {source.description}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DesignSystemsList
