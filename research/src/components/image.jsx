import React from 'react'

export function Image({ alt = src, src, style }) {
  return <img alt={alt} srcSet={src + ' 2x'} style={style} />
}

export default Image
