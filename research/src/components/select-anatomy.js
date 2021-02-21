import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const SelectAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="select">
        <Slot name="button-container">
          <Part name="button">
            <Slot name="selected-value">
              <Part name="selected-value">Currently selected value</Part>
            </Slot>
          </Part>
        </Slot>
        <Slot name="listbox-container">
          <Part name="listbox">
            <Slot>
              <Part name="opt-group">
                <Part name="option"></Part>
              </Part>
            </Slot>
          </Part>
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default SelectAnatomy
