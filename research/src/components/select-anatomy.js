import React from 'react'
import './anatomy.css'

const SelectAnatomy = () => {
  return (
    <div className="component-anatomy">
      <host class="select">
        <part name="button">
          <slot>
            Default = &lt;button&gt;currently selected value &lt;span part="icon-arrow"&gt;
            &lt;/span&gt;&lt;/button&gt;
          </slot>
        </part>
        <part name="pop-up">
          <slot>Required in this slot: one or more &lt;option&gt;&lt;/option&gt elements;</slot>
        </part>
      </host>
    </div>
  )
}

export default SelectAnatomy
