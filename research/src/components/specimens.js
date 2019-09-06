import _ from 'lodash'
import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image'

const Specimens = ({ component, concept }) => {
  const images = getImagesForComponentConcept(component, concept)
  const hasImages = !_.isEmpty(images)

  return (
    <div
      style={{
        padding: hasImages ? '1em' : '2em',
        marginBottom: '2em',
        border: '1px solid #ccc',
      }}
    >
      {images.map((src, i) => (
        <Image key={i} src={src} title={src} />
      ))}
    </div>
  )
}

export default Specimens
