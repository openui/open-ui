import React from 'react'
import { Link } from 'gatsby'

const ComponentLayout = ({ children, frontmatter }) => {
  return (
    <>
      <div style={{ float: 'right', marginLeft: 'auto', fontSize: '1rem' }}>
        {frontmatter.research && (
          <Link
            activeStyle={{ fontWeight: 'bold' }}
            style={{ marginLeft: '0.5rem' }}
            to={frontmatter.research}
          >
            View Research
          </Link>
        )}
        {frontmatter.researchFor && (
          <Link style={{ marginLeft: '0.5rem' }} to={frontmatter.researchFor}>
            View Proposal
          </Link>
        )}
      </div>
      <h1>{frontmatter.name}</h1>
      {children}
    </>
  )
}

export default ComponentLayout
