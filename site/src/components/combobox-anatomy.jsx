import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const ComboboxAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="combobox">
        <Part name="input type=text"></Part>
        <Part name="button">
          <Part name="selectedoption">Currently selected option</Part>
        </Part>

        <Slot name="datalist">
          <Part name="datalist">
            <Slot>
              <Part name="optgroup (optional)">
                <Part name="legend (optional)">Optgroup label</Part>
                <Part name="option">Option text</Part>
              </Part>
            </Slot>
          </Part>
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default ComboboxAnatomy
