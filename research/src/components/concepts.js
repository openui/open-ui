import React from 'react'
import _ from 'lodash'
import { openUIConceptsByComponent } from '../sources'
import ConceptCoverage from './concept-coverage'
import Specimens from './specimens'

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
          <div key={conceptOpenUIName} style={{ padding: '8px', marginBottom: '36px' }}>
            <h3
              style={{
                flex: '0 0 auto',
                width: '100%',
                textAlign: 'left',
                marginBottom: hasOtherNames ? 0 : '.5em',
                lineHeight: 1,
              }}
            >
              {conceptOpenUIName}{' '}
              {!hasOtherNames && (
                <ConceptCoverage
                  component={component}
                  openUIConceptName={conceptOpenUIName}
                  conceptName={conceptOpenUIName}
                />
              )}
            </h3>
            {hasOtherNames && (
              <div style={{ color: '#777', lineHeight: 1, marginBottom: '.5em' }}>
                {uniqueNames.map(otherName => (
                  <div key={otherName}>
                    <ConceptCoverage
                      component={component}
                      openUIConceptName={conceptOpenUIName}
                      conceptName={otherName}
                    />{' '}
                    {otherName}
                  </div>
                ))}
              </div>
            )}
            <Specimens
              showDescriptions={showDescriptions}
              component={component}
              conceptName={conceptOpenUIName}
            />
          </div>
        )
      })}
    </>
  )
}

export default Concepts
