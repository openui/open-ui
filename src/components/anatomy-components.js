import React from 'react'
import './anatomy.css'

export const AnatomyWrapper = ({ children }) => (
  <div className="component-anatomy-wrapper">
    <input type="checkbox" id="show-slots" />
    <label htmlFor="show-slots"> Show slots</label>
    <div className="component-anatomy">{children}</div>
  </div>
)

export const Host = ({ children, name }) => (
  <div className="host" data-name={name}>
    {children}
  </div>
)

export const Part = ({ children, name }) => (
  <div className="part" data-name={name}>
    {children}
  </div>
)

export const Slot = ({ children, name }) => (
  <div className="slot" data-name={name}>
    {children}
  </div>
)
