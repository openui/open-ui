import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const ToolbarAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-toolbar">
        <Part name="item">
          <Slot name="item" />
        </Part>
        <Part name="divider">
          <Slot name="divider" />
        </Part>
        <Part name="item">
          <Slot name="item" />
        </Part>
      </Host>
    </AnatomyWrapper>
  )
}

export default ToolbarAnatomy
