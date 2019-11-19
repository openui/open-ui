import React from 'react'
import { Link } from 'gatsby'

const ComponentResearchLayout = ({ children, frontmatter }) => {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {frontmatter.name}
        <span style={{ fontSize: '1rem' }}>📚 Research</span>
        <Link style={{ fontSize: '1rem' }} to={frontmatter.researchFor}>
          Curated Page
        </Link>
      </h1>
      {children}
    </>
  )
}

export default ComponentResearchLayout
