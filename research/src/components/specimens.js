import _ from 'lodash'
import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image'

const Specimens = ({ component, conceptName, concepts }) => {
  const images = getImagesForComponentConcept(component, conceptName)
  const hasImages = !_.isEmpty(images)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '8px',
        border: '1px solid #ccc',
      }}
    >
      {images.map((image, i) => {
        const hasOverrideName = image.name !== image.openUIName

        return (
          <div
            key={image.image}
            style={{
              display: 'flex',
              flex: '0 0 auto',
              flexDirection: 'column',
              padding: hasImages ? '8px' : '16px',
              textAlign: 'center',
            }}
          >
            <div style={{ margin: 'auto auto 0 auto', padding: '4px' }}>
              <Image
                src={image.image}
                title={image.image}
                alt={`An image of the ${conceptName} concept on a ${component} component in ${image.sourceName}.`}
              />
            </div>
            <div
              style={{
                position: 'relative',
                padding: '4px 8px',
                minWidth: '120px',
                fontSize: '11px',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                color: 'rgba(0, 0, 0, 0.6)',
                borderTop: '1px solid #ccc',
              }}
            >
              <label style={{ textTransform: 'uppercase' }}>{image.sourceName}</label>
              {hasOverrideName && <strong> "{image.name}"</strong>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Specimens
