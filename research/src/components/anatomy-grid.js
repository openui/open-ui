import React from 'react'
import PropTypes from 'prop-types'

const borderColor = '#888'
const borderScale = 2
const bgColor = 'rgba(0, 0, 0, 0.1)'
const textColor = '#fff'

/**
 * Given a CSS grid template, returns an array of grid areas in the order that they appear in the template.
 */
const getOrderedGridAreas = template =>
  template
    .split('\n')
    .filter(s => s.includes('"'))
    .map(s => s.slice(s.indexOf('"') + 1, s.lastIndexOf('"')))
    .join(' ')
    .split(/ +/)
    .reduce((acc, next) => {
      if (next === '' || next === '.' || acc.includes(next)) {
        return acc
      }
      return [...acc, next]
    }, [])

const PartName = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      paddingRight: borderScale,
      paddingBottom: borderScale,
      top: 0,
      fontSize: '12px',
      lineHeight: 1,
      minWidth: '3ch',
      textAlign: 'center',
      color: textColor,
      background: borderColor,
      border: `${borderScale}px solid ${borderColor}`,
    }}
  >
    {children}
  </div>
)
PartName.propTypes = {
  children: PropTypes.string.isRequired,
}

const Part = ({ gridArea, children }) => (
  <div
    style={{
      gridArea: gridArea,
      position: 'relative',
      boxSizing: 'border-box',
      margin: '4px',
      border: `${borderScale}px solid ${borderColor}`,
      background: bgColor,
    }}
  >
    <PartName gridArea={gridArea}>{children}</PartName>
  </div>
)
Part.propTypes = {
  gridArea: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

const Anatomy = ({ gridTemplate, areasDescriptions }) => {
  const gridAreas = getOrderedGridAreas(gridTemplate)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
      <div
        style={{
          position: 'relative',
          display: 'grid',
          padding: '4px',
          marginBottom: '1rem',
          boxSizing: 'border-box',
          width: '600px',
          background: 'rgba(0, 0, 0, 0.1)',
          border: `${borderScale}px solid ${borderColor}`,
          gridTemplate,
        }}
      >
        {gridAreas.map(gridArea => (
          <Part key={gridArea} gridArea={gridArea}>
            {gridArea}
          </Part>
        ))}
      </div>

      {gridAreas.length > 0 && (
        <ol>
          {gridAreas.map(name => (
            <li key={name}>
              {name}
              {areasDescriptions && areasDescriptions[name] && (
                <>
                  {' - '}
                  <small style={{ opacity: 0.75 }}>{areasDescriptions[name]}</small>
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
Anatomy.propTypes = {
  gridTemplate: PropTypes.string.isRequired,
}

export default Anatomy
