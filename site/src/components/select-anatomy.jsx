import { AnatomyWrapper, Host, Part, Slot } from './anatomy-components'

const SelectAnatomy = () => {
  return (
    <AnatomyWrapper>
      <Host name="select">
        <Slot name="button">
          <Part name="button">
            <Part name="selectedoption">Currently selected option</Part>
            <Part name="::picker-icon"></Part>
          </Part>
        </Slot>
        <Part name="::picker(select)">
          <Slot>
            <Part name="optgroup (optional)">
              <Part name="legend (optional)">Optgroup label</Part>
              <Part name="option">Option text</Part>
            </Part>
          </Slot>
        </Part>
      </Host>
    </AnatomyWrapper>
  )
}

export default SelectAnatomy
