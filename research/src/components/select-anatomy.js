import React from 'react'
import './anatomy.css'

const SelectAnatomy = () => {
  return (
    <div className="component-anatomy">
      <host class="select">
        <slot>
          <part name="button">
            <slot>
              Default = &lt;button&gt;currently selected value &lt;span part="icon-arrow"&gt;
              &lt;/span&gt;&lt;/button&gt;
            </slot>
          </part>
          <part name="pop-up">
            <div class="element">
              <div class="anatomy-label">&lt;optgroup&gt;</div>
              <slot>Required in this slot: one or more &lt;option&gt;&lt;/option&gt elements;</slot>
            </div>
          </part>
        </slot>
      </host>
    </div>
  )
}

export default SelectAnatomy
