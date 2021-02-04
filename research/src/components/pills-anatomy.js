/* eslint-disable */

import React from 'react'
import './anatomy.css'

const PillsAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label for="show-slots">Show slots</label>
      <div class="component-anatomy">
        <host name="pills" role="listbox">
          <slot name="pills-container">
            <part name="ul">
              <part name="li">
                <part name="span [part=item]" data-slot>
                  item
                </part>
              </part>
            </part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default PillsAnatomy
