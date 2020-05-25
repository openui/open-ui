import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { sources } from '../sources'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ensureObjectProperty } from '../utils/utils'

/**
 * impl:
 *   - variant:
 *       - mode/browser/reader status|status|status (per test scenario)
 */

const query = graphql`
  {
    allTestrunsJson {
      edges {
        node {
          id
          variant
          mode
          implementation
          environment {
            browser
            browserVersion
            reader
            readerVersion
          }
          scenarios {
            key
            passed
            narration
            notes
          }
          component
        }
      }
    }
  }
`

const indicatorStyle = {
  display: 'inline-flex',
  marginRight: '2px',
  width: '12px',
  height: '16px',
  borderRadius: '2px',
}

const TestRunScenarios = ({ scenarios, definition }) => (
  <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
    {scenarios.map((scenario, index) => {
      let title = scenario.narration
      if (definition[scenario.key]) {
        title = `${definition[scenario.key]['description']}\n\nExpected:${
          definition[scenario.key]['expected']
        }\nNarration: ${scenario.narration}`
      }
      if (scenario.notes) {
        title = `${title}\nNotes:${scenario.notes}`
      }
      return (
        <div
          key={index}
          title={title}
          style={{
            ...indicatorStyle,
            background: scenario.passed ? 'green' : scenario.passed === false ? 'red' : '#ddd',
          }}
        ></div>
      )
    })}
  </div>
)

const TestRun = ({ testRun, component, variantName, implementationName, mode }) => {
  const test = sources[component]
  const definition = test.variants.filter((v) => v.names.indexOf(variantName) >= 0)[0]

  const scenarioDefinitions = {}
  ;['keyboard', 'reader'].map((mode) => {
    scenarioDefinitions[mode] = {}
    definition &&
      definition[mode] &&
      definition[mode].map((d) => (scenarioDefinitions[mode][d.key] = d))
  })

  return (
    <table>
      <thead>
        <tr key="head">
          <th key="key">Mode / environment</th>
          <th key="status">Status</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(testRun).map((key) => (
          <tr key={key}>
            <td key="key">
              <Link
                to="/show-test-run"
                state={{
                  component,
                  variantName,
                  name: implementationName,
                  mode: testRun[key]['mode'],
                  scenarios: testRun[key]['scenarios'],
                  testKey: key,
                }}
              >
                {key}
              </Link>
            </td>
            <td key="status">
              <TestRunScenarios
                scenarios={testRun[key]['scenarios']}
                definition={scenarioDefinitions[testRun[key]['mode']]}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const ComponentTestRuns = ({ runs, component }) => {
  const groupped = []
  runs.map((run) => {
    ensureObjectProperty(groupped, run.implementation)
    ensureObjectProperty(groupped[run.implementation], run.variant)
    const key = [
      run.mode,
      run.environment.browser,
      run.environment.browserVersion,
      run.environment.reader,
      run.environment.readerVersion,
    ].join(' ')
    ensureObjectProperty(groupped[run.implementation][run.variant], key)
    groupped[run.implementation][run.variant][key] = { mode: run.mode, scenarios: run.scenarios }
  })

  return Object.keys(groupped).map((implementationName) => (
    <div key={implementationName}>
      <h4 key={implementationName}>Implementation {implementationName}</h4>
      {Object.keys(groupped[implementationName]).map((variantName) => (
        <div key={variantName}>
          <h5 key={variantName}>Variant: {variantName}</h5>
          <TestRun
            variantName={variantName}
            component={component}
            implementationName={implementationName}
            testRun={groupped[implementationName][variantName]}
          />
        </div>
      ))}
    </div>
  ))
}

const TestRuns = ({ name }) => {
  const componentTests = sources[name]
  if (!componentTests) {
    return `Component source ${name} not found`
  }

  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const componentTestRuns = data.allTestrunsJson.edges
          .filter((edge) => edge.node.component === name)
          .map((edge) => edge.node)
        return componentTestRuns && <ComponentTestRuns component={name} runs={componentTestRuns} />
      }}
    />
  )
}

TestRuns.propTypes = {
  name: PropTypes.string,
}

export default TestRuns
