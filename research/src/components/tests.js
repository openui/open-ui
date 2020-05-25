import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { sources } from '../sources'

const Tests = ({ name }) => {
  const componentTests = sources[name]
  if (!componentTests) {
    return <div key={name}>Component source {name} not found</div>
  }

  return (
    <>
      <h2 key={name}>Tests</h2>
      {componentTests.variants.map((variant, id) => (
        <div key={id}>
          <h3 key={id}>Variant {variant.names.join(', ')}</h3>
          {['keyboard', 'reader'].map((mode) => (
            <table key={mode}>
              <thead>
                <tr key="head">
                  <th>{mode} scenarios</th>
                  <th>Expected</th>
                </tr>
              </thead>
              <tbody>
                {variant[mode].map((scenario, id) => (
                  <tr key={id}>
                    <td key="description">{scenario.description}</td>
                    <td key="expected">{scenario.expected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      ))}
    </>
  )
}

Tests.propTypes = {
  name: PropTypes.string,
}

export default Tests
