import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const CheckboxAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="openui-checkbox">
        <Slot name="label">
          <Part name="label" />
        </Slot>
        <Slot name="indicator">
          <Part name="indicator" />
        </Slot>
      </Host>
    </AnatomyWrapper>
  )
}

export default CheckboxAnatomy
