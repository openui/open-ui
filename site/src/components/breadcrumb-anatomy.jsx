import React from 'react'
import { AnatomyWrapper, Host, Slot, Part } from './anatomy-components'
import './breadcrumb-anatomy.css'

const BreadcrumbAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="breadcrumb" role="navigation">
        <Slot name="breadcrumb-container">
          <Part name="ol">
            <Part name="li [part=item]" data-slot>
              item
            </Part>
          </Part>
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default BreadcrumbAnatomy
