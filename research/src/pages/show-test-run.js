import React from 'react'

import { getComponentTestScenarios } from '../sources'
import Layout from '../components/layout'

const ShowTestRun = ({ location }) => {
  const { state } = location
  return state ? <ShowTestRunInternal state={state} /> : <div>Error: state not defined</div>
}

const ShowTestRunInternal = ({ state }) => {
  const { name, component, variantName, scenarios, testKey, mode } = state

  const scenariosDefinition = {}
  getComponentTestScenarios(component, variantName, mode).map(
    (scenario) => (scenariosDefinition[scenario.key] = scenario),
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
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario, index) => (
            <tr key={index}>
              <td key="description">{scenariosDefinition[scenario.key].description}</td>
              <td key="expected">{scenariosDefinition[scenario.key].expected}</td>
              <td key="status">{scenario.passed ? 'PASSED' : 'FAILED'}</td>
              <td key="naration">{scenario.narration}</td>
              <td key="notes">{scenario.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default ShowTestRun
