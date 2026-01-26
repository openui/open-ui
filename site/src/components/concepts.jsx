import { useState } from 'preact/hooks'
import { openUIConceptsByComponent } from '../sources'
import './concepts.css'

import Concept from './concept'

const Concepts = ({ component }) => {
  const [showDescriptions, setShowDescriptions] = useState(false)
  const [collapseAll, toggleCollapseAll] = useState(true)

  const conceptsForComponent = Object.entries(openUIConceptsByComponent[component] || []).sort(
    ([_a, conceptsA], [_b, conceptsB]) => conceptsA.length - conceptsB.length,
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
      {conceptsForComponent.map(([conceptOpenUIName, concepts]) => {
        const uniqueNames = Array.from(new Set(concepts.map((concept) => concept.name)))
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
