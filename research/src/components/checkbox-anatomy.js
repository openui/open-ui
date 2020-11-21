import React from 'react'
import './anatomy.css'

export default () => {
  return (
    <div className="component-anatomy">
      <host name="checkbox">
        <part name="label">
          <slot name="label"></slot>
        </part>
        <part name="indicator">
          <slot></slot>
        </part>
      </host>
    </div>
  )
}
