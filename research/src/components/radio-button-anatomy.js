import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const RadioButtonAnatomy = () => {
  return (
    <AnatomyWrapper name="radio-button">
      <Host name="openui-radio-button">
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

export default RadioButtonAnatomy
