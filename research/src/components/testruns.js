import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { sources } from '../sources'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ensureObjectProperty } from '../utils/utils'

/**
 * impl:
 *   - variant:
 *       - mode/browser/reader status|status|status (per test step)
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
          steps {
            key
            passed
            narration
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

const TestRunSteps = ({ steps, definition }) => (
  <div style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
    {steps.map((step, index) => {
      let title = step.narration
      if (definition[step.key]) {
        title = `${definition[step.key]['description']}\n\nExpected:${
          definition[step.key]['expected']
        }\nNarration: ${step.narration}`
      }
      return (
        <div
          key={index}
          title={title}
          style={{
            ...indicatorStyle,
            background: step.passed ? 'green' : step.passed === false ? 'red' : '#ddd',
          }}
        ></div>
      )
    })}
  </div>
)

const TestRun = ({ testRun, component, variantName, implementationName, mode }) => {
  const test = sources[component]
  const definition = test.variants.filter((v) => v.names.indexOf(variantName) >= 0)[0]

  const stepDefinitions = {}
  ;['keyboard', 'reader'].map((mode) => {
    stepDefinitions[mode] = {}
    definition &&
      definition[mode] &&
      definition[mode].map((d) => (stepDefinitions[mode][d.key] = d))
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
                  steps: testRun[key]['steps'],
                  testKey: key,
                }}
              >
                {key}
              </Link>
            </td>
            <td key="status">
              <TestRunSteps
                steps={testRun[key]['steps']}
                definition={stepDefinitions[testRun[key]['mode']]}
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
    groupped[run.implementation][run.variant][key] = { mode: run.mode, steps: run.steps }
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
