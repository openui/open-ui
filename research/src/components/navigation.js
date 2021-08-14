import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import CommunityLinks from './community-links'

const Navigation = ({ opened, githubURL }) => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allMdx {
          edges {
            node {
              frontmatter {
                menu
                name
                path
                pathToResearch
                pathToProposal
                showInMenu
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const allFrontmatter = _.map(data.allMdx.edges, 'node.frontmatter')

      const frontmatterForNav = allFrontmatter
        .filter(({ name, pathToProposal }) => !!name)
        .filter(({ showInMenu }) => showInMenu !== false)

      let [menuNodes, topLevelNodes] = _.partition(frontmatterForNav, 'menu')
      menuNodes = _.sortBy(menuNodes, ['name'])

      // get all frontmatter objects with a menu defined
      let menu = _.sortBy(_.toPairs(_.groupBy(menuNodes, 'menu')), _.first)

      let listItem = (item) => (
        <li
          key={item.name}
          style={{
            margin: 0,
            listStyleType: 'none',
          }}
        >
          <Link
            to={item.path}
            style={{
              display: 'block',
              padding: '0.25em 1em 0.25em 0.5em',
              margin: 0,
              color: 'inherit',
              borderLeft: '2px solid transparent',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
            }}
            activeStyle={{
              borderLeftColor: '#00a453',
              backgroundColor: '#f2f2f2',
            }}
          >
            {item.name}
          </Link>
        </li>
      )

      return (
        <nav id="site-nav" className={opened ? 'opened' : ''}>
          <CommunityLinks githubURL={githubURL} className={'mobile'} />

          <div style={{ top: '1em', margin: 0 }}>
            <div
              key="Home"
              style={{
                margin: 0,
                listStyleType: 'none',
              }}
            >
              <Link
                to="/"
                style={{
                  display: 'block',
                  padding: '0.25em 1em 0.25em 0.5em',
                  margin: 0,
                  color: 'inherit',
                  borderLeft: '2px solid transparent',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                }}
                activeStyle={{
                  borderLeftColor: '#00a453',
                  backgroundColor: '#f2f2f2',
                }}
              >
                Home
              </Link>
            </div>

            <ul style={{ margin: '0.25em 0 1.5em 0' }}>
            {topLevelNodes.map(listItem)}
            </ul>

            <div style={{ margin: '1rem' }} />
            
            {menu.map(([category, items]) => (
              <div key={category} style={{ margin: 0, listStyleType: 'none' }}>
                <h3
                  style={{
                    display: 'inline-block',
                    opacity: 0.75,
                    fontWeight: 'bold',
                    fontSize: '1em',
                    margin: '0 0 0 calc(2px + 0.5em)', // align with items
                  }}
                >
                  {category}
                </h3>
                <ul style={{ margin: '0.25em 0 1.5em 0' }}>{items.map(listItem)}</ul>
              </div>
            ))}
          </div>
        </nav>
      )
    }}
  />
)

Navigation.propTypes = {
  style: PropTypes.object,
}

export default Navigation
