import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Navigation from './navigation'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            githubURL
          }
        }
      }
    `}
    render={data => (
      <div style={{ paddingBottom: '10rem' }}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          githubURL={data.site.siteMetadata.githubURL}
        />
        <div
          style={{
            display: 'grid',
            gridGap: '2em',
            gridTemplate: `
              "nav  view" auto /
               auto 1fr
            `,
            padding: '0 1rem',
            margin: '0 auto',
            maxWidth: '1200px',
            gridAutoFlow: 'rows',
          }}
        >
          <Navigation style={{ gridArea: 'nav' }} />

          <div style={{ gridArea: 'view' }}>{children}</div>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
