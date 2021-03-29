import React from 'react'
import _ from 'lodash'
import { openUIConceptsByComponent } from '../sources'

export default function ConceptIndex({ component }) {
  if (!openUIConceptsByComponent[component]) return null

  const concepts = _.sortBy(
    _.toPairs(openUIConceptsByComponent[component]),
    ([openUIName, concepts]) => -concepts.length,
  )

  return (
    <ol style={{ listStyle: 'none', marginLeft: 24, marginRight: -24, width: 100 }}>
      <li>
        <a href="#names">Names</a>
      </li>
      <li>
        <a href="#anatomy">Anatomy</a>
      </li>
      <li>
        <a href="#concepts">Concepts</a>
      </li>
      <ol style={{ fontSize: '.825rem', listStyle: 'none', marginLeft: 8 }}>
        {concepts.map(([concept]) => {
          return (
            <li key={concept} style={{ marginBottom: 4 }}>
              <a style={{ textTransform: 'capitalize' }} href={`#${concept}`}>
                {concept}
              </a>
            </li>
          )
        })}
      </ol>
    </ol>
  )
}
