import React from 'react'
import './anatomy.css'

const SelectAnatomy = () => {
  return (
    <div className="component-anatomy">
      <host class="select">
        <slot>
          <part name="button">
            <slot>Currently selected option</slot>
          </part>
          <part name="listbox">
            <slot>
              <div class="element">
                <div class="anatomy-label">&lt;optgroup&gt;</div>
                <slot>
                  <part name="option">
                    <slot>Content</slot>
                  </part>
                </slot>
              </div>
            </slot>
          </part>
        </slot>
      </host>
    </div>
  )
}

export default SelectAnatomy
