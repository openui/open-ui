import React from 'react'
import './missing-images.css'

export function MissingImages(props) {
  const { images } = props

  return (
    <div className="missing-images">
      <h4>No images for the following design systems:</h4>
      <ul className="image-list">
        {images.map((image) => {
          return <li key={image.sourceName}>{image.sourceName}</li>
        })}
      </ul>
    </div>
  )
}
