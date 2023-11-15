import React from 'react'
import './anatomy.css'

import { anatomiesByComponent } from '../sources'

const Anatomy = ({ component }) => {
  const anatomy = anatomiesByComponent[component]

  if (Object.keys(anatomy).length === 0) {
    return (
      <div className="empty-anatomy">
        None of the {component} JSON <code>/resources</code> define an anatomy.
      </div>
    )
  }

  return (
    <ul className="anatomy">
      {anatomy.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

export default Anatomy
