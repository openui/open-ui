import React from 'react'
import { getImagesForComponentConcept } from '../sources'
import Image from './image'

const Specimens = ({ component, conceptName, showDescriptions }) => {
  const images = getImagesForComponentConcept(component, conceptName)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', border: '1px solid #ccc' }}>
      {images.map((image, index) => {
        const hasOverrideName = image.name !== image.openUIName

        return (
          <div
            key={image.image + index}
            style={{
              display: 'flex',
              flex: '0 0 auto',
              maxWidth: '100%',
              flexDirection: 'column',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <div style={{ margin: 'auto auto 0 auto', padding: '8px' }}>
              <Image
                src={image.image}
                title={image.image}
                alt={`${conceptName} concept on a ${component} component in ${image.sourceName}.`}
              />
            </div>
            <div
              style={{
                position: 'relative',
                padding: '4px 8px',
                minWidth: '120px',
                fontSize: showDescriptions ? '14px' : '12px',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                color: 'rgba(0, 0, 0, 0.5)',
                borderTop: '1px solid #ccc',
              }}
            >
              <label>{image.sourceName}</label>
              {hasOverrideName && ' '}
              {hasOverrideName && <strong>{image.name}</strong>}
              {showDescriptions && <br />}
              {showDescriptions && (
                <div style={{ fontSize: '12px' }}>{image.description || '...'}</div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Specimens
