import React from 'react'
import './select-anatomy.css'

const SelectAnatomy = () => {
  return (
    <host>
      <part name="button">
        <slot>Default = Split Button Component</slot>
      </part>
      <part name="pop-up">
        <slot>Default = &lt;option&gt;&lt;/option&gt;</slot>
      </part>
    </host>
  )
}

export default SelectAnatomy
