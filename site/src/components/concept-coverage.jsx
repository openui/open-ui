import React from 'react'
import { sourceNames, getSourcesWithComponentConcept } from '../sources'
import './concept-coverage.css'

const ConceptCoverage = ({ component, conceptName, openUIConceptName }) => {
  const withConcept = getSourcesWithComponentConcept(component, conceptName, openUIConceptName)
  const withoutConcept = sourceNames.filter(x => !withConcept.includes(x))

  return (
    <div className="concept-coverage">
      {withConcept.map((sourceName) => (
        <div key={sourceName} className="with-concept" title={sourceName} />
      ))}

      {withoutConcept.map((sourceName) => (
        <div key={sourceName} className="without-concept" title={sourceName} />
      ))}
    </div>
  )
}

export default ConceptCoverage
