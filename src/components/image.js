import React from 'react'

const Image = ({ src, alt = src, style, ...rest }) => {
  let imageData
  try {
    imageData = require(`../images/${src}`)
  } catch (error) {}

  return (
    <img
      alt={alt}
      srcSet={imageData + ' 2x'}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        margin: 0,
        ...style,
      }}
      {...rest}
    />
  )
}

export default Image
