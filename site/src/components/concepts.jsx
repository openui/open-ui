import React from 'react'
import _ from 'lodash'
import { openUIConceptsByComponent } from '../sources'
import './concepts.css'

import Concept from './concept'

const Concepts = ({ component }) => {
  const [showDescriptions, setShowDescriptions] = React.useState(false)
  const [collapseAll, toggleCollapseAll] = React.useState(true)

  const conceptsForComponent = _.sortBy(
    _.toPairs(openUIConceptsByComponent[component]),
    ([openUIName, concepts]) => -concepts.length,
  )

  return (
    <>
      <div className="concepts">
        <label htmlFor="descriptions">
          <input
            type="checkbox"
            id="descriptions"
            checked={showDescriptions}
            aria-checked={showDescriptions}
            onChange={() => setShowDescriptions((isDescShown) => !isDescShown)}
          />
          Show descriptions
        </label>
        <label htmlFor="collapse">
          <input
            type="checkbox"
            id="collapse"
            checked={collapseAll}
            aria-checked={collapseAll}
            onChange={() => toggleCollapseAll((isCollapsed) => !isCollapsed)}
          />
          {collapseAll ? 'Collapse all' : 'Expand all'}
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
            initExpand={collapseAll}
          />
        )
      })}
    </>
  )
}

export default Concepts
