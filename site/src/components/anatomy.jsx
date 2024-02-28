import React from 'react'
import './anatomy.css'

import { componentsByName } from '../sources'

const Anatomy = ({ component }) => {
  const anatomies = componentsByName[component]
    .filter(
      (component) =>
        !!component.anatomy && (!Array.isArray(component.anatomy) || component.anatomy.length > 0),
    )
    .map((component) => {
      if (Array.isArray(component.anatomy)) {
        return {
          sourceName: component.sourceName,
          anatomy: component.anatomy,
        }
      }

      return {
        sourceName: component.sourceName,
        ...component.anatomy,
      }
    })

  if (anatomies.length === 0) {
    return (
      <div className="empty-anatomy">
        None of the {component} JSON <code>/resources</code> define an anatomy.
      </div>
    )
  }

  function Child({ name, children }) {
    return (
      <li key={name}>
        <p>{name}</p>
        {children?.length > 0 && <ul>{children?.map((child) => Child(child))}</ul>}
      </li>
    )
  }

  return (
    <ul className="anatomy">
      {anatomies.map(({ anatomy, children, sourceName }) => (
        <li key={sourceName}>
          <span>{sourceName}</span>
          {Array.isArray(anatomy) && (
            <ul>
              {anatomy.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
          {!Array.isArray(anatomy) && <ul>{children?.map((child) => Child(child))}</ul>}
        </li>
      ))}
    </ul>
  )
}

export default Anatomy
