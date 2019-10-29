import React from 'react'
import { Link } from 'gatsby'

const ComponentResearchLayout = ({ children, frontmatter }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 0, 0, .2)',
          marginBottom: '8px',
        }}
      >
        <h1 style={{ margin: 0, borderBottom: 'unset' }}>{frontmatter.name}</h1>
        <Link to={frontmatter.researchFor} style={{ color: 'blue' }}>
          Curated Page
        </Link>
      </div>
      {children}
    </>
  )
}

export default ComponentResearchLayout
