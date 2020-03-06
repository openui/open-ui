import React from 'react'
import { Link } from 'gatsby'

const ComponentLayout = ({ children, frontmatter }) => {
  return (
    <>
      <div style={{ float: 'right', marginLeft: 'auto', fontSize: '1rem' }}>
        {frontmatter.pathToResearch && (
          <Link
            activeStyle={{ fontWeight: 'bold' }}
            style={{ marginLeft: '0.5rem' }}
            to={frontmatter.pathToResearch}
          >
            View Research
          </Link>
        )}
        {frontmatter.pathToProposal && (
          <Link style={{ marginLeft: '0.5rem' }} to={frontmatter.pathToProposal}>
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
