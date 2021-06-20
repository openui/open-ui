import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const RadioButtonGroup = () => {
  return (
    <AnatomyWrapper name="radio-button-group">
      <Host name="openui-radio-button-group">
        <Slot name="label">
          <Part name="label" />
        </Slot>
        <Slot name="required-indicator">
          <Part name="required-indicator" />
        </Slot>
        <Slot name="choices">
          <Part name="choices" />
        </Slot>
        <Slot name="error-message">
          <Part name="error-message" />
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default RadioButtonGroup
