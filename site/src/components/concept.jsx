import { useEffect, useState } from 'preact/hooks'
import ConceptCoverage from './concept-coverage'
import Specimens from './specimens'
import './concept.css'

export default function Concept({
  conceptOpenUIName,
  hasOtherNames,
  component,
  uniqueNames,
  showDescriptions,
  initExpand,
}) {
  const [open, toggleOpen] = useState(initExpand)

  useEffect(() => {
    toggleOpen(initExpand)
  }, [initExpand])

  return (
    <div className="concept">
      <h3 className={hasOtherNames ? 'with-other-names' : null}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            toggleOpen((isOpen) => !isOpen)
          }}
        >
          <span>{open ? <>&#9660;</> : <>&#9650;</>}</span> {conceptOpenUIName}
        </button>
        {!hasOtherNames && (
          <ConceptCoverage
            component={component}
            openUIConceptName={conceptOpenUIName}
            conceptName={uniqueNames[0]}
          />
        )}
      </h3>
      {hasOtherNames && (
        <div className="other-names-wrapper">
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

      {open && (
        <Specimens
          showDescriptions={showDescriptions}
          component={component}
          conceptName={conceptOpenUIName}
        />
      )}
    </div>
  )
}
