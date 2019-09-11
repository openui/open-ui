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
          const sourceNames = _.map(components, 'sourceName').join(', ')

          return (
            <li key={component.name} style={{ listStyleType: 'none' }}>
              {component.name}
              {' - '}
              <small style={{ opacity: 0.75 }}>{sourceNames}</small>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ComponentCoverage
