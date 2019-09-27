import React from 'react'
import AnatomyGrid from './anatomy-grid'

const CarouselAnatomy = () => (
  <AnatomyGrid
    gridTemplate={`
      ".    slide    slide  slide  slide  .   " 80px
      "prev slide    slide  slide  slide  next" 60px
      ".    slide    slide  slide  slide  .   " 80px
      ".    rotation picker picker picker .   " 60px /
       60px 60px     1fr    1fr    80px   60px
    `}
  />
)

export default CarouselAnatomy
