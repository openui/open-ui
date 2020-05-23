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
                  <th>{mode} steps</th>
                  <th>Expected</th>
                </tr>
              </thead>
              <tbody>
                {variant[mode].map((step, id) => (
                  <tr key={id}>
                    <td key="description">{step.description}</td>
                    <td key="expected">{step.expected}</td>
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
