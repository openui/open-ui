import React from 'react'
import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const FileAnatomy = () => {
  return (
    <AnatomyWrapper showToggle={false}>
      <Host name="openui-file">
        <Part name="file-selector-button" />
        <Part name="label" />
      </Host>
    </AnatomyWrapper>
  )
}

export default FileAnatomy
