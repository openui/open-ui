import _ from 'lodash'
import React from 'react'
import './anatomy.css'

import { anatomiesByComponent } from '../sources'

const Anatomy = ({ component }) => {
  const anatomy = anatomiesByComponent[component]

  if (_.isEmpty(anatomy)) {
    return (
      <div className="empty-anatomy">
        None of the {component} JSON <code>/resources</code> define an anatomy.
      </div>
    )
  }

  return (
    <ul className="anatomy">
      {_.map(anatomy, ({ name }) => (
        <li key={name}>
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Anatomy
