import React from 'react'

const ComponentLayout = ({ children, frontmatter }) => {
  return (
    <>
      <div style={{ float: 'right', marginLeft: 'auto', fontSize: '1rem' }}>
        {frontmatter.pathToResearch && (
          <a
            activeStyle={{ fontWeight: 'bold' }}
            style={{ marginLeft: '0.5rem' }}
            to={frontmatter.pathToResearch}
          >
            View Research
          </a>
        )}
        {frontmatter.pathToProposal && (
          <a style={{ marginLeft: '0.5rem' }} to={frontmatter.pathToProposal}>
            View Proposal
          </a>
        )}
      </div>
      <h1>{frontmatter.name}</h1>
      {children}
    </>
  )
}

export default ComponentLayout
