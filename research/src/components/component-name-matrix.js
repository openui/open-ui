import React, { useState } from 'react'
import { componentOriginalNames, sources, sourcesCount } from '../sources'
import _ from 'lodash'

const SORT_OPTIONS = {
  COMPONENT_NAME: 'COMPONENT_NAME',
  MATCH_COUNT: 'MATCH_COUNT',
}
const SORT_NEXT = {
  COMPONENT_NAME: SORT_OPTIONS.MATCH_COUNT,
  MATCH_COUNT: SORT_OPTIONS.COMPONENT_NAME,
}

const ComponentNameMatrix = (props) => {
  const [sort, setSort] = useState(SORT_OPTIONS.COMPONENT_NAME)

  const getMatchName = (name) =>
    name
      .replace(/ /gi, '')
      .toLowerCase()
      .replace(/(\w+)(e|er)?(s|ing)$/, '$1')

  const matchNameMap = new Map([])

  const matchNames = componentOriginalNames.map((name) => {
    const matchName = getMatchName(name)
    matchNameMap.set(name, matchName)
    return matchName
  })

  const matchNameToCount = _.sortBy(_.toPairs(_.countBy(matchNames)), ([matchName, count]) =>
    sort === SORT_OPTIONS.COMPONENT_NAME
      ? matchName
      : SORT_OPTIONS.MATCH_COUNT
      ? -count
      : matchName,
  )

  const colStyle = { flex: 1, width: '2rem' }
  const headerStyle = {
    position: 'sticky',
    display: 'block',
    padding: '1rem 0 0.5rem 0',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    background: 'white',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
  }
  const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '2rem',
    lineHeight: 1.2,
    // borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  }

  return (
    <div>
      <button onClick={() => setSort(SORT_NEXT[sort])}>Sort By: {sort}</button>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          fontSize: '12px',
        }}
      >
        <div style={colStyle}>
          <strong style={headerStyle}>Match</strong>
          {_.map(matchNameToCount, ([matchName, count]) => {
            return (
              <div key={matchName} style={cellStyle}>
                {Math.round((count / sourcesCount) * 100)}%
                <div
                  style={{
                    display: 'block',
                    background: 'limegreen',
                    height: '4px',
                    float: 'left',
                    width: Math.round((count / sourcesCount) * 100) + '%',
                  }}
                />
              </div>
            )
          })}
        </div>

        {_.map(sources, (source) => (
          <div key={source.name} style={colStyle}>
            <strong style={headerStyle}>
              <a target="_blank" rel="noopener noreferrer" href={source.url}>
                {source.name}
              </a>
            </strong>
            {_.map(matchNameToCount, ([matchName, count]) => {
              const foundComponent = _.find(
                source.components,
                ({ name }) => getMatchName(name) === matchName,
              )

              const style = {
                ...cellStyle,
                background: foundComponent ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                color: foundComponent ? 'rgb(0, 64, 0)' : 'rgb(64, 0, 0)',
                textDecoration: 'none',
              }

              return foundComponent ? (
                <a
                  title={foundComponent.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={foundComponent.url}
                  style={style}
                >
                  <span
                    style={{
                      maxWidth: '55px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {foundComponent.name}
                  </span>
                </a>
              ) : (
                <div key={matchName} style={style} />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentNameMatrix
