import React from 'react'
import _ from 'lodash'
import { componentsByName } from '../sources'

const ComponentCoverage = ({ component }) => (
  <ul>
    {_.map(_.get(componentsByName, component), component => (
      <li key={component.sourceName}>
        {component.name} ({component.sourceName})
      </li>
    ))}
  </ul>
)

export default ComponentCoverage
