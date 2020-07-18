/* eslint-disable */

import React from 'react'
import './anatomy.css'

const SkeletonAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <div class="component-anatomy">
        <host name="skeleton" data-slot>
          <part name="skeleton-line" data-slot></part>
          <part name="skeleton-shape" data-slot></part>
        </host>
      </div>
    </div>
  )
}

export default SkeletonAnatomy
