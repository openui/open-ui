import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const SelectAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="select">
        <Slot name="button">
          <Part name="button type=select">
            <Part name="selectedoption">Currently selected option</Part>
            <Part name="marker"></Part>
          </Part>
        </Slot>
        <Slot name="listbox">
          <Part name="listbox">
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

export default SelectAnatomy
