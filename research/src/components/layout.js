import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

import Header from './header'
import Navigation from './navigation'
import ComponentLayout from './component-layout'

const components = {
  pre: props => {
    // get the code content from the compiled `pre > code`
    const code = props.children
    const exampleCode = code.props.children
    const language = (code.props.className || '').replace('language-', '')

    return (
      <Highlight {...defaultProps} theme={vsDark} code={exampleCode} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '0.25rem 0.5rem' }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

const Layout = ({ children, pageContext }) => {
  const { frontmatter } = pageContext || {}

  const ContentWrapper =
    frontmatter && frontmatter.path && frontmatter.path.startsWith('/components/')
      ? ComponentLayout
      : ({ children }) => <>{children}</>

  return (
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
        <MDXProvider components={components}>
          <div style={{ paddingBottom: '10rem' }}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              githubURL={data.site.siteMetadata.githubURL}
            />
            <div
              style={{
                display: 'flex',
                padding: '0 1rem',
                margin: '0 auto',
                maxWidth: '1200px',
              }}
            >
              <Navigation style={{ marginRight: '1em' }} />

              <div style={{ flex: '1' }}>
                <ContentWrapper frontmatter={frontmatter}>{children}</ContentWrapper>
              </div>
            </div>
          </div>
        </MDXProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
