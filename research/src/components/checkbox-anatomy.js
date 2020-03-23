import React from 'react'
import './anatomy.css'

export default () => {
  return (
    <div className="component-anatomy">
      <host>
        <part name="label">
          <slot>{'Default'}</slot>
        </part>
        <part name="checkbox">
          <part name="checked-indicator" />
          <part name="indeterminate-indicator" />
        </part>
      </host>
    </div>
  )
}
