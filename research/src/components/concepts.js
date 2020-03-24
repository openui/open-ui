import React from 'react'
import _ from 'lodash'
import { conceptsByComponent } from '../sources'
import ConceptCoverage from './concept-coverage'
import Specimens from './specimens'

const Concepts = ({ component }) => {
  const [showDescriptions, setShowDescriptions] = React.useState(false)

  const conceptsForComponent = conceptsByComponent[component]

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={showDescriptions}
          aria-checked={showDescriptions}
          onChange={() => setShowDescriptions(!showDescriptions)}
        />{' '}
        Show descriptions
      </div>
      {_.map(conceptsForComponent, (concepts, conceptOpenUIName) => (
        <div key={conceptOpenUIName}>
          <h3 style={{ marginTop: '24px' }}>
            {conceptOpenUIName}{' '}
            <ConceptCoverage component={component} concept={conceptOpenUIName} />
          </h3>
          <Specimens component={component} conceptName={conceptOpenUIName} concepts={concepts} />
        </div>
      ))}
    </div>
  )
}

export default Concepts
