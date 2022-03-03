import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import SEO from './seo'

import './global.css'
import Header from './header'
import Navigation from './navigation'
import ComponentLayout from './component-layout'

// Add JSON5 language support to Prism
import Prism from 'prism-react-renderer/prism'

// Need to create the Prism global before importing new languages
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-json5')

const components = {
  pre: (props) => {
    // get the code content from the compiled `pre > code`
    const code = props.children
    const exampleCode = code.props.children.trimEnd()
    const language = (code.props.className || '').replace('language-', '')

    return (
      <Highlight {...defaultProps} theme={vsDark} code={exampleCode} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '0.25rem 0.5rem',
              overflow: 'auto',
            }}
            // Adding tabIndex to this non-interactive pre element to allow
            // keyboard users to scroll this pre element using only the keyboard
            tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
            role="region"
            aria-label="Code example"
          >
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
  const [opened, setOpen] = React.useState(false)
  const onToggleMenu = React.useCallback(() => setOpen((opened) => !opened), [setOpen])

  const { frontmatter } = pageContext || {}
  const useComponentLayout = frontmatter?.path?.startsWith('/components/') ?? false

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
      render={(data) => (
        <MDXProvider components={components}>
          <SEO title={frontmatter?.name} />
          <div style={{ paddingBottom: '10rem' }}>
            <Header
              siteTitle={data.site.siteMetadata.title}
              githubURL={data.site.siteMetadata.githubURL}
              menuOpened={opened}
              onToggleMenu={onToggleMenu}
            />
            <div className="page-wrapper">
              <Navigation opened={opened} githubURL={data.site.siteMetadata.githubURL} />

              <div className="page-content" style={{ flex: '1 1 auto', minWidth: 0 }}>
                {useComponentLayout ? (
                  <ComponentLayout frontmatter={frontmatter}>{children}</ComponentLayout>
                ) : (
                  children
                )}
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
