import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { anatomiesByComponent } from '../sources'

const Anatomy = ({ component }) => {
  const anatomy = anatomiesByComponent[component]

  if (_.isEmpty(anatomy)) {
    return (
      <div style={{ padding: '1em', marginBottom: '1em', color: '#555', background: '#f2f2f2' }}>
        None of the {component} JSON <code>/resources</code> define an anatomy.
      </div>
    )
  }

  return (
    <ul style={{ marginLeft: 0 }}>
      {_.map(anatomy, ({ name }) => (
        <li key={name} style={{ listStyleType: 'none' }}>
          {name}
        </li>
      ))}
    </ul>
  )
}

Anatomy.propTypes = {
  component: PropTypes.string,
}

export default Anatomy
