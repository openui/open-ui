import React from 'react'
import { Link } from 'gatsby'

const ResearchCuratedLayout = ({ children, frontmatter }) => {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {frontmatter.name}
        {process.env.NODE_ENV !== `production` && (
          <Link style={{ fontSize: '1rem', float: 'right ' }} to={frontmatter.research}>
            Research Page
          </Link>
        )}
      </h1>
      {children}
    </>
  )
}

export default ResearchCuratedLayout
