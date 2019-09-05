import React from 'react'
import _ from 'lodash'
import { anatomiesByComponent } from '../sources'

const Anatomy = props => {
  return (
    <ul>
      {_.map(anatomiesByComponent[props.component], ({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

// const AnatomyArea = ({ name }) => {
//   return (
//     <div
//       style={{
//         padding: '8px',
//         background: 'rgba(255,255,255,0.5)',
//         gridArea: name,
//       }}
//     >
//       {name}
//     </div>
//   )
// }

export default Anatomy
