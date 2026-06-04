import { componentsByName, get, uniqBy, groupBy } from '../sources'
import './component-coverage.css'

const ComponentCoverage = ({ component }) => {
  const matchingComponents = get(componentsByName, component)
  const withDifferentNamesUniq = uniqBy(matchingComponents, 'name')
  const withDifferentNamesGrouped = groupBy(matchingComponents, (component) => component.name)

  if (withDifferentNamesUniq.length === 0) {
    return null
  }

  return (
    <ul className="component-coverage">
      {withDifferentNamesUniq.map((component, i) => {
        const components = withDifferentNamesGrouped[component.name]
        return (
          <li key={component.name + component.sourceName}>
            {component.name}
            {' - '}
            <small>
              {components.map((component, i, arr) => (
                <span key={component.name + component.sourceName}>
                  <a target="_blank" rel="noopener noreferrer" href={component.url}>
                    {component.sourceName}
                  </a>
                  {i < arr.length - 1 && ', '}
                </span>
              ))}
            </small>
          </li>
        )
      })}
    </ul>
  )
}

export default ComponentCoverage
