import React from 'react'

const Image = ({ src, alt = src, style, ...rest }) => {
  let imageData
  try {
    imageData = require(`../images/${src}`)
  } catch (error) {}

  return (
    <img
      alt={alt}
      src={imageData}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        zoom: 0.5,
        margin: 0,
        ...style,
      }}
      {...rest}
    />
  )
}

export default Image
