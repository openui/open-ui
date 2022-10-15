import React from 'react'

export function Image({ alt, src, style }) {
  return <img alt={alt} srcset={src + ' 2x'} style={style} />
}
