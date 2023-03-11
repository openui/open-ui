import React, { useState } from 'react'
import { componentOriginalNames, sources, sourcesCount } from '../sources'
import _ from 'lodash'
import './component-name-matrix.css'

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

  return (
    <div>
      <button onClick={() => setSort(SORT_NEXT[sort])}>Sort By: {sort}</button>
      <div className='component-name-matrix'>
        <div className='column'>
          <strong className='header'>Match</strong>
          {_.map(matchNameToCount, ([matchName, count]) => {
            return (
              <div key={matchName} className='cell'>
                {Math.round((count / sourcesCount) * 100)}%
                <div className='percentage-bar'
                  style={{
                    width: Math.round((count / sourcesCount) * 100) + '%',
                  }}
                />
              </div>
            )
          })}
        </div>

        {_.map(sources, (source) => (
          <div key={source.name} className='column'>
            <strong className='header'>
              <a target="_blank" rel="noopener noreferrer" href={source.url}>
                {source.name}
              </a>
            </strong>
            {_.map(matchNameToCount, ([matchName, count]) => {
              const foundComponent = _.find(
                source.components,
                ({ name }) => getMatchName(name) === matchName,
              )

              return foundComponent ? (
                <a
                  title={foundComponent.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={foundComponent.url}
                  className='cell found'
                >
                  <span>
                    {foundComponent.name}
                  </span>
                </a>
              ) : (
                <div key={matchName} className='cell not-found' />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentNameMatrix
