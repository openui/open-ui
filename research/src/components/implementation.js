import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { withPrefix } from 'gatsby'

const Implementation = ({ name, src }) => {
  const iframeSrc = src.indexOf('//') > 0 ? src : withPrefix(`/${src}.html`)

  return (
    <>
      <h3>{name}</h3>
      <iframe src={iframeSrc} style={{ width: '90%', height: 400 }} />
    </>
  )
}

Implementation.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
}

export default Implementation
