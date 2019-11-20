import React from 'react'
import './select-anatomy.css'

const SelectAnatomy = () => {
  return (
    <host>
      <part name="button">
        <slot>{'Default = <button>${value}<span part="icon-arrow"></span></button>'}</slot>
      </part>
      <part name="pop-up">
        <slot>{'Default = <option></option>'}</slot>
      </part>
    </host>
  )
}

export default SelectAnatomy
