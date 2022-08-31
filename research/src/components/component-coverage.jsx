import React from 'react'
import _ from 'lodash'
import { componentsByName } from '../sources'

const ComponentCoverage = ({ component }) => {
  const matchingComponents = _.get(componentsByName, component)
  const withDifferentNamesUniq = _.uniqBy(matchingComponents, 'name')
  const withDifferentNamesGrouped = _.groupBy(matchingComponents, 'name')

  if (_.isEmpty(withDifferentNamesUniq)) {
    return null
  }

  return (
    <div>
      <h2>Names</h2>
      <ul style={{ marginLeft: 0 }}>
        {_.map(withDifferentNamesUniq, (component, i) => {
          const components = withDifferentNamesGrouped[component.name]
          return (
            <li key={component.name + component.sourceName} style={{ listStyleType: 'none' }}>
              {component.name}
              {' - '}
              <small style={{ opacity: 0.75 }}>
                {components.map((component, i, arr) => (
                  <span key={component.name + component.sourceName}>
                    <a target="_blank" rel="noopener noreferrer" href={component.url}>
                      {component.sourceName}
                    </a>
                    {i < arr.length - 1 && ', '}
                  </span>
                ))}
              </small>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ComponentCoverage
