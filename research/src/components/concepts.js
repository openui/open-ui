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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <label
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          htmlFor="descriptions"
        >
          <input
            type="checkbox"
            id="descriptions"
            checked={showDescriptions}
            aria-checked={showDescriptions}
            onChange={() => setShowDescriptions((isDescShown) => !isDescShown)}
            style={{
              marginRight: '8px',
              verticalAlign: 'middle',
            }}
          />
          Show descriptions
        </label>
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
