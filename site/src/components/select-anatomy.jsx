import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const SelectAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="select">
        <Slot name="button">
          <Part name="button type=selectlist">
            <Part name="selectedvalue">Currently selected value</Part>
          </Part>
        </Slot>
        <Slot name="listbox">
          <Part name="listbox">
            <Slot>
              <Part name="optgroup (optional)">
                <Part name="option">Option text</Part>
              </Part>
            </Slot>
          </Part>
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default SelectAnatomy
