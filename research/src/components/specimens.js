import _ from 'lodash'
import React from 'react'
import { kebabCaseToSentence, removeExtensionFromFilename } from '../utils/text'
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
      {images.map((src, i) => {
        const srcNameAsSentence = kebabCaseToSentence(removeExtensionFromFilename(src))

        return <Image key={i} alt={srcNameAsSentence} src={src} title={srcNameAsSentence} />
      })}
    </div>
  )
}

export default Specimens
