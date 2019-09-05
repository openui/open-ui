import React from 'react'
import Image from './image'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Logo = ({ siteTitle }) => (
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Image
      src="logo-green.png"
      style={{ height: '2.75em', marginRight: '0.25rem' }}
      alt={siteTitle}
    />
    <span style={{ verticalAlign: 'middle' }}>{siteTitle}</span>
  </Link>
)

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: '',
}

export default Logo
