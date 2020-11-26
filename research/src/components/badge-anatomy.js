/* eslint-disable */

import React from 'react'
import './anatomy.css'
const BadgeAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label for="show-slots"> Show slots</label>
      <div class="component-anatomy">
        <host name="badge">
          <slot name="badge-container">
            <part name="value"></part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default BadgeAnatomy
