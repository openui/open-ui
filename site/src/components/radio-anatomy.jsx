import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const RadioAnatomy = () => {
  return (
    <AnatomyWrapper name="radio">
      <Host name="openui-radio">
        <Slot name="label">
          <Part name="label" />
        </Slot>
        <Slot name="checked-indicator">
          <Part name="checked-indicator" />
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default RadioAnatomy
