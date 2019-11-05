import React from 'react'
import './select-anatomy-styles.css'

const SelectAnatomy = () => {
  return (
    <div>
      <h3>Diagram</h3>
      <host>
        <part name="button">
          <slot>Default = Split Button Component</slot>
        </part>
        <part name="pop-up">
          <slot>Default = List Component</slot>
        </part>
      </host>
      <h3>Events</h3>
      <ul>
        <li>
          <code>::host</code> Listening for <code>toggle-pop-up</code> event to hide/show{' '}
          <code>::part-pop-up</code>
        </li>
        <li>
          <code>::part-button</code> Listens to <code>click</code> event and dispatches{' '}
          <code>toggle-pop-up</code> event
        </li>
        <li>
          <code>::part-button</code> Listening for <code>option-change</code> event to update
          selected value shown
        </li>
        <li>
          <code>::part-pop-up</code> Listening for <code>option-change</code> event to dispatch{' '}
          <code>toggle-pop-up</code> event
        </li>
        <li>
          <code>::part-button</code> Dispatches custom event <code>split-button-clicked</code>
        </li>
      </ul>
    </div>
  )
}

export default SelectAnatomy
