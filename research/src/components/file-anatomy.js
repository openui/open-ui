import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const FileAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-file">
        <Part name="file-selector-button">
          <Slot name="button" />
        </Part>
        <Part name="label">
          <Slot name="label" />
        </Part>
      </Host>
    </AnatomyWrapper>
  )
}

export default FileAnatomy
