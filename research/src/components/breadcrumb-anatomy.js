/* eslint-disable */

import React from 'react'
import './anatomy.css'
import './breadcrumb-anatomy.css'

const BreadcrumbAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label for="show-slots"> Show slots</label>
      <div class="component-anatomy">
        <host name="breadcrumb">
          <slot name="breadcrumb-container">
            <part name="breadcrumb-list-items">
              <part name="breadcrumb-item"></part>
              <part name="breadcrumb-divider"></part>
              <part name="breadcrumb-item"></part>
            </part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default BreadcrumbAnatomy
