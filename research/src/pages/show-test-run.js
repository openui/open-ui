import React from 'react'

import { getComponentTestSteps } from '../sources'
import Layout from '../components/layout'

const ShowTestRun = ({ location }) => {
  const { state } = location
  return state ? <ShowTestRunInternal state={state} /> : <div>Error: state not defined</div>
}

const ShowTestRunInternal = ({ state }) => {
  const { name, component, variantName, steps, testKey, mode } = state

  const stepsDefinition = {}
  getComponentTestSteps(component, variantName, mode).map(
    (step) => (stepsDefinition[step.key] = step),
  )

  return (
    <Layout>
      <h1>
        Test run {name} {component}
      </h1>
      <div style={{ padding: '.5rem', margin: '.5rem', background: '#eee' }}>
        <div>Variant: {variantName}</div>
        <div>Test key: {testKey}</div>
      </div>
      <table>
        <thead>
          <tr key="head">
            <th>Description</th>
            <th>Expected</th>
            <th>Status</th>
            <th>Narration</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step, index) => (
            <tr key={index}>
              <td key="description">{stepsDefinition[step.key].description}</td>
              <td key="expected">{stepsDefinition[step.key].expected}</td>
              <td key="status">{step.passed ? 'PASSED' : 'FAILED'}</td>
              <td key="naration">{step.narration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default ShowTestRun
