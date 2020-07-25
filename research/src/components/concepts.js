import React from 'react'
import _ from 'lodash'
import { openUIConceptsByComponent } from '../sources'

import Concept from './concept'

const Concepts = ({ component }) => {
  const [showDescriptions, setShowDescriptions] = React.useState(false)

  const conceptsForComponent = _.sortBy(
    _.toPairs(openUIConceptsByComponent[component]),
    ([openUIName, concepts]) => -concepts.length,
  )

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={showDescriptions}
          aria-checked={showDescriptions}
          onChange={() => setShowDescriptions(!showDescriptions)}
        />{' '}
        Show descriptions
      </div>
      {_.map(conceptsForComponent, ([conceptOpenUIName, concepts]) => {
        const uniqueNames = _.uniq(_.map(concepts, 'name'))
        const hasOtherNames = uniqueNames.length > 1

        return (
          <Concept
            conceptOpenUIName={conceptOpenUIName}
            hasOtherNames={hasOtherNames}
            component={component}
            uniqueNames={uniqueNames}
            showDescriptions={showDescriptions}
            key={conceptOpenUIName}
          />
        )
      })}
    </>
  )
}

export default Concepts
