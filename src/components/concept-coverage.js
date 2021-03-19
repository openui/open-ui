import React from 'react'
import _ from 'lodash'
import { sourceNames, getSourcesWithComponentConcept } from '../sources'

const indicatorStyle = {
  display: 'inline-flex',
  marginRight: '1px',
  width: '4px',
  height: '8px',
  borderRadius: '2px',
}

const ConceptCoverage = ({ component, conceptName, openUIConceptName }) => {
  const withConcept = getSourcesWithComponentConcept(component, conceptName, openUIConceptName)
  const withoutConcept = _.difference(sourceNames, withConcept)

  return (
    <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
      {_.map(withConcept, (sourceName) => (
        <div
          key={sourceName}
          style={{ ...indicatorStyle, background: '#6C6' }}
          title={sourceName}
        />
      ))}

      {_.map(withoutConcept, (sourceName) => (
        <div
          key={sourceName}
          style={{ ...indicatorStyle, background: '#ddd' }}
          title={sourceName}
        />
      ))}
    </div>
  )
}

export default ConceptCoverage
