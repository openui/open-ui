import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const CheckboxAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-checkbox">
        <Part name="label">
          <Slot name="label" />
        </Part>
        <Part name="indicator">
          <Slot name="indicator" />
        </Part>
      </Host>
    </AnatomyWrapper>
  )
}

export default CheckboxAnatomy
