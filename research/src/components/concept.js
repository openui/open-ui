import React from 'react'
import ConceptCoverage from './concept-coverage'
import Specimens from './specimens'

export default function Concept({
  conceptOpenUIName,
  hasOtherNames,
  component,
  uniqueNames,
  showDescriptions,
}) {
  return (
    <div style={{ padding: '8px', marginBottom: '36px' }}>
      <h3
        style={{
          flex: '0 0 auto',
          width: '100%',
          textAlign: 'left',
          marginBottom: hasOtherNames ? 0 : '.5em',
          lineHeight: 1,
        }}
      >
        <span style={{ marginRight: 8 }}>{conceptOpenUIName}</span>
        {!hasOtherNames && (
          <ConceptCoverage
            component={component}
            openUIConceptName={conceptOpenUIName}
            conceptName={uniqueNames[0]}
          />
        )}
      </h3>
      {hasOtherNames && (
        <div style={{ color: '#777', lineHeight: 1, marginBottom: '.5em' }}>
          {uniqueNames.map((otherName) => (
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
}
