/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './anatomy.css'

const FileAnatomy = () => {
  return (
    <div className="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label htmlFor="show-slots"> Show slots</label>
      <div className="component-anatomy">
        <host name="openui-file">
          <part name="file-selector-button">
            <slot name="button"></slot>
          </part>
          <part name="label">
            <slot name="label"></slot>
          </part>
        </host>
      </div>
    </div>
  )
}

export default FileAnatomy
