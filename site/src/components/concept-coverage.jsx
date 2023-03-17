import React from 'react'
import _ from 'lodash'
import { sourceNames, getSourcesWithComponentConcept } from '../sources'
import './concept-coverage.css'

const ConceptCoverage = ({ component, conceptName, openUIConceptName }) => {
  const withConcept = getSourcesWithComponentConcept(component, conceptName, openUIConceptName)
  const withoutConcept = _.difference(sourceNames, withConcept)

  return (
    <div className="concept-coverage">
      {_.map(withConcept, (sourceName) => (
        <div key={sourceName} className="with-concept" title={sourceName} />
      ))}

      {_.map(withoutConcept, (sourceName) => (
        <div key={sourceName} className="without-concept" title={sourceName} />
      ))}
    </div>
  )
}

export default ConceptCoverage
