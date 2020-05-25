import React from 'react'
import { useForm } from 'react-hook-form'

import { getVariantNames, getComponentTestScenarios } from '../sources'
import { getBrowserInfo, downloadJson } from '../utils/utils'
import Layout from '../components/layout'
import Implementation from '../components/implementation'

const modes = ['keyboard', 'reader']
const readers = ['jaws', 'nvda', 'narrator', 'voiceover']
const browsers = ['chrome', 'edge', 'safari', 'firefox', 'ie', 'electron']
const browserInfo = getBrowserInfo()

const Select = React.forwardRef(({ id, defaultValue, values, label, setValue }, ref) => {
  return (
    <div key={`select-${id}`}>
      <label htmlFor={id}>{label}: </label>

      <select
        name={id}
        id={id}
        defaultValue={defaultValue}
        {...(setValue && { onChange: (e) => setValue(e.target.value) })}
        ref={ref}
      >
        {values.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  )
})

const Checkbox = React.forwardRef(({ id, defaultValue, label }, ref) => {
  return (
    <div key={`check-${id}`}>
      <label htmlFor={`${id}`}>{label}</label>
      <input type="checkbox" id={id} name={id} defaultValue={defaultValue} ref={ref} />
    </div>
  )
})

const Input = React.forwardRef(({ id, defaultValue, label, hidden, size }, ref) => {
  return (
    <div key={`input-${id}`}>
      {!hidden && <label htmlFor={`${id}`}>{label}</label>}
      <input
        id={id}
        name={id}
        defaultValue={defaultValue}
        ref={ref}
        {...(hidden && { type: 'hidden' })}
        {...(size && { size })}
      />
    </div>
  )
})

const downloadTestRun = ({ form, state }) => {
  const { component, version, id } = state
  const { variant, mode, browser, browserVersion, reader, readerVersion, scenarios } = form

  const doc = {
    $schema: '../schemas/testrun.schema.json5',
    lastUpdated: new Date().toISOString(),
    implementation: id,
    version,
    component,
    variant,
    mode,
    environment: {
      browser,
      browserVersion,
      reader,
      readerVersion,
    },
    scenarios,
  }

  const fileName = `${id}.${component}.${variant}.${mode}.${browser}.${reader}.json`.toLowerCase()
  downloadJson(fileName, doc)
}

const NewTestRun = ({ location }) => {
  const { state } = location
  return state ? <NewTestRunInternal state={state} /> : <div>Error: state not defined</div>
}

const NewTestRunInternal = ({ state }) => {
  const { component } = state
  const variants = React.useMemo(() => getVariantNames(component), [component])

  const { register, handleSubmit } = useForm()
  const onSubmit = (form) => downloadTestRun({ form, state })

  const [variant, setVariant] = React.useState(variants[0])
  const [mode, setMode] = React.useState(modes[0])

  const scenarios = React.useMemo(() => getComponentTestScenarios(component, variant, mode), [
    component,
    variant,
    mode,
  ])

  return (
    <Layout>
      <h1>
        New test run - {state.name} {state.component}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ padding: '.5rem', margin: '.5rem', background: '#eee' }}>
          <Select
            id="variant"
            defaultValue={variant}
            values={variants}
            setValue={setVariant}
            ref={register()}
            label="Variant"
          />
          <Select
            id="mode"
            defaultValue={mode}
            values={modes}
            setValue={setMode}
            label="Mode"
            ref={register()}
          />
          <Select id="reader" values={readers} label="Screen reader" ref={register()} />
          <Input id="readerVersion" label="Reader version: " ref={register()} />
          <Select
            id="browser"
            defaultValue={browserInfo.name}
            values={browsers}
            label="Browser"
            ref={register()}
          />
          <Input
            id="browserVersion"
            defaultValue={browserInfo.version}
            label="Browser version: "
            ref={register()}
          />
        </div>

        <Implementation {...state} />

        <table>
          <thead>
            <tr key="head">
              <th>{mode} scenario</th>
              <th>Expected</th>
              <th style={{ minWidth: '50%' }}>Actual</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((scenario, index) => (
              <tr key={index}>
                <td key="description">{scenario.description}</td>
                <td key="expected">{scenario.expected}</td>
                <td key="actual">
                  <Checkbox id={`scenarios[${index}].passed`} label="Passed " ref={register()} />
                  <Input
                    id={`scenarios[${index}].key`}
                    label="Key: "
                    defaultValue={scenario.key}
                    ref={register()}
                    hidden
                  />
                  <br />
                  <Input
                    id={`scenarios[${index}].narration`}
                    label="Narration: "
                    size={50}
                    ref={register()}
                  />
                  <br />
                  <Input
                    id={`scenarios[${index}].notes`}
                    label="Notes: "
                    size={50}
                    ref={register()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          To submit the test run, create a PR to add the file to <code>research/src/testruns</code>
        </div>
        <input type="submit" value="Download test run" />
      </form>
    </Layout>
  )
}

export default NewTestRun
