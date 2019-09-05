import React from 'react'
import _ from 'lodash'
import { sourceNames, getSourcesWithComponentConcept } from '../sources'

const ConceptCoverage = ({ component, concept }) => {
  const withConcept = getSourcesWithComponentConcept(component, concept)
  const withoutConcept = _.difference(sourceNames, withConcept)
  return (
    <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      {_.map(withConcept, sourceName => (
        <div
          key={sourceName}
          style={{
            display: 'inline-flex',
            marginRight: '1px',
            padding: '4px 2px',
            color: 'white',
            fontSize: 10,
            textTransform: 'uppercase',
            background: '#6C6',
          }}
          title={sourceName}
        />
      ))}

      {_.map(withoutConcept, sourceName => (
        <div
          key={sourceName}
          style={{
            display: 'inline-flex',
            marginRight: '1px',
            padding: '4px 2px',
            color: 'white',
            fontSize: 10,
            textTransform: 'uppercase',
            background: '#C66',
          }}
          title={sourceName}
        />
      ))}
    </div>
  )
}

export default ConceptCoverage
