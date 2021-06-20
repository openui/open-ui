import React from 'react'
import './anatomy.css'

export const AnatomyWrapper = ({ children, name = 'show-slots' }) => (
  <div className="component-anatomy-wrapper">
    <input type="checkbox" id={name} className="show-slots" />
    <label htmlFor={name}> Show slots</label>
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
