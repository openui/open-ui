import React from 'react'
import './anatomy.css'

export default () => {
  return (
    <div className="component-anatomy">
      <host name="checkbox">
        <part name="label">
          <slot name="label"></slot>
        </part>
        <part name="checkbox">
          <part name="checked-indicator">
            <slot></slot>
          </part>
          <part name="indeterminate-indicator">
            <slot></slot>
          </part>
        </part>
      </host>
    </div>
  )
}
