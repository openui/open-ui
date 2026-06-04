import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const FileAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-file">
        <Slot name="file-selector-button">
          <Part name="file-selector-button" />
        </Slot>
        <Slot name="label">
          <Part name="label" />
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default FileAnatomy
