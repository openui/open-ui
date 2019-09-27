import React from 'react'

const CarouselAnatomy = () => {
  const titleStyles = {
    fontSize: '10px',
    lineHeight: '0.8',
    position: 'absolute',
    top: '0px',
  }
  const itemStyles = {
    border: '1px dotted grey',
    margin: '2px',
    boxSizing: 'border-box',
    position: 'relative',
  }
  const itemNextStyles = {
    gridArea: 'next',
  }
  const itemPrevStyles = {
    gridArea: 'prev',
  }
  const itemSlideStyles = {
    gridArea: 'slide',
  }
  const itemRotationStyles = {
    gridArea: 'rotation',
  }
  const itemPickerStyles = {
    gridArea: 'picker',
  }

  const containerStyles = {
    width: '242px',
    margin: '10px 0 10px 0',
    boxSizing: 'border-box',
    display: 'grid',
    border: '1px solid grey',
    gridTemplateColumns: '40px 40px 40px 40px 40px 40px',
    gridTemplateRows: '20px 40px 40px 40px 40px',
    gridTemplateAreas: `
    ". . . . . ."
    ". slide slide slide slide ."
    "prev slide slide slide slide next"
    ". slide slide slide slide ."
    ". rotation picker picker picker ."`,
  }

  return (
    <div style={containerStyles}>
      <div style={{ ...itemStyles, ...itemPrevStyles }}>
        <small style={titleStyles}>prev</small>
      </div>
      <div style={{ ...itemStyles, ...itemSlideStyles }}>
        <small style={titleStyles}>slide</small>
      </div>
      <div style={{ ...itemStyles, ...itemNextStyles }}>
        <small style={titleStyles}>next</small>
      </div>
      <div style={{ ...itemStyles, ...itemRotationStyles }}>
        <small style={titleStyles}>rotation</small>
      </div>
      <div style={{ ...itemStyles, ...itemPickerStyles }}>
        <small style={titleStyles}>picker</small>
      </div>
    </div>
  )
}

export default CarouselAnatomy
