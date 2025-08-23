import { useState } from 'preact/hooks'
import { componentOriginalNames, sources, sourcesCount } from '../sources'
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

  const matchNameToCount = Object.entries(
    matchNames.reduce((acc, value) => {
      if (!acc[value]) {
        acc[value] = 1
      } else {
        acc[value]++
      }

      return acc
    }, {}),
  ).sort(([matchNameA, countA], [matchNameB, countB]) => {
    return sort === SORT_OPTIONS.COMPONENT_NAME
      ? matchNameA.localeCompare(matchNameB)
      : SORT_OPTIONS.MATCH_COUNT
      ? countB - countA
      : matchNameA.localeCompare(matchNameB)
  })

  return (
    <div>
      <button onClick={() => setSort(SORT_NEXT[sort])}>Sort By: {sort}</button>
      <div className="component-name-matrix">
        <div className="column">
          <strong className="header">Match</strong>
          {matchNameToCount.map(([matchName, count]) => {
            return (
              <div key={matchName} className="cell">
                {Math.round((count / sourcesCount) * 100)}%
                <div
                  className="percentage-bar"
                  style={{
                    width: Math.round((count / sourcesCount) * 100) + '%',
                  }}
                />
              </div>
            )
          })}
        </div>

        {sources.map((source) => (
          <div key={source.name} className="column">
            <strong className="header">
              <a target="_blank" rel="noopener noreferrer" href={source.url}>
                {source.name}
              </a>
            </strong>
            {matchNameToCount.map(([matchName, count]) => {
              const foundComponent = source.components.find(
                ({ name }) => getMatchName(name) === matchName,
              )

              return foundComponent ? (
                <a
                  title={foundComponent.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={foundComponent.url}
                  className="cell found"
                >
                  <span>{foundComponent.name}</span>
                </a>
              ) : (
                <div key={matchName} className="cell not-found" />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentNameMatrix
