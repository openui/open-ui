import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const InputNumberAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-input-number">
        <Part name="input">
          <Slot name="input">
            <Part name="value">
              <Slot name="value">
                <Part name="placeholder">
                  <Slot name="placeholder" />
                </Part>
              </Slot>
            </Part>
          </Slot>
          <Part name="spinner">
            <Slot name="spinner">
              <Part name="spinner-button-up">
                <Slot name="spinner-button-up" />
              </Part>
              <Part name="spinner-button-down">
                <Slot name="spinner-button-down" />
              </Part>
            </Slot>
          </Part>
        </Part>
      </Host>
    </AnatomyWrapper>
  )
}

export default InputNumberAnatomy
