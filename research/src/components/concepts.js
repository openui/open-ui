import React from 'react'
import _ from 'lodash'
import { conceptsByComponent } from '../sources'
import ConceptCoverage from './concept-coverage'
import Specimens from './specimens'

const Concepts = ({ component }) => {
  return (
    <div>
      {_.map(conceptsByComponent[component], (concept, conceptOpenUIName) => (
        <div key={conceptOpenUIName}>
          <h3 style={{ marginTop: '24px' }}>
            {conceptOpenUIName}{' '}
            <ConceptCoverage component={component} concept={conceptOpenUIName} />
          </h3>
          <Specimens component={component} concept={conceptOpenUIName} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
