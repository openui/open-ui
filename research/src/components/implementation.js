import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { withPrefix, Link } from 'gatsby'

const Implementation = ({ name, src, id, component }) => {
  const iframeSrc =
    src && src.indexOf('//') > 0 ? src : withPrefix(`/${id}-${component.toLowerCase()}.html`)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <h3>{name}</h3>
        &nbsp;
        <Link
          to="/new-test-run"
          state={{
            component,
            id,
            name,
            src,
          }}
        >
          New test run
        </Link>
      </div>
      <iframe src={iframeSrc} style={{ width: '90%', height: 400 }} />
    </>
  )
}

Implementation.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
}

export default Implementation
