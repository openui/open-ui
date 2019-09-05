import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image'

const Specimens = ({ component, concept }) => {
  const images = getImagesForComponentConcept(component, concept)

  return (
    <div style={{ border: '1px solid #ccc' }}>
      <div style={{ padding: '1rem' }}>
        {images.map((src, i) => (
          <Image key={i} src={src} title={src} />
        ))}
      </div>
    </div>
  )
}

export default Specimens
