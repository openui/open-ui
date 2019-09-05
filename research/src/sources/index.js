import _ from 'lodash'

import antd from './antd.json5'
import atlassian from './atlassian.json5'
import auth0 from './auth0.json5'
import bootstrap from './bootstrap.json5'
import carbon from './carbon.json5'
import evergreen from './evergreen.json5'
import fabric from './fabric.json5'
import fast from './fast.json5'
import lightning from './lightning.json5'
import materialComponentsWeb from './materialComponentsWeb.json5'
import semantic from './semantic.json5'
import stardust from './stardust.json5'
import w3 from './w3.json5'

// Sources
export const sources = [
  antd,
  atlassian,
  auth0,
  bootstrap,
  carbon,
  evergreen,
  fabric,
  fast,
  lightning,
  materialComponentsWeb,
  semantic,
  stardust,
  w3,
].map(source => ({
  ...source,
  components: source.components.map(component => {
    const componentOpenUIName = component.openUIName || component.name
    return {
      ...component,
      sourceName: source.name,
      openUIName: componentOpenUIName,
      concepts: _.map(component.concepts, concept => {
        const conceptOpenUIName = concept.openUIName || concept.name
        return {
          ...concept,
          sourceName: source.name,
          componentName: componentOpenUIName,
          openUIName: conceptOpenUIName,
        }
      }),
    }
  }),
}))

export const sourceNames = _.map(sources, 'name')
export const sourcesCount = sources.length
export const sourceComponentConceptMap = sources.reduce((acc, src) => {
  acc[src.name] = {}

  _.forEach(src.components, comp => {
    acc[src.name][comp.openUIName] = {}

    _.forEach(comp.concepts, con => {
      acc[src.name][comp.openUIName][con.openUIName] = con
    })
  })

  return acc
}, {})

// Components
const componentList = _.flatMap(sources, 'components')
export const componentOriginalNames = _.map(componentList, 'name')
export const componentsByName = _.groupBy(componentList, 'openUIName')

// Anatomies
export const anatomiesByComponent = _.mapValues(componentsByName, components =>
  _.compact(_.uniqBy(_.flatMap(components, 'anatomy'), 'name')),
)

// Concepts
const conceptList = _.compact(_.flatMap(componentList, 'concepts'))

export const conceptsByComponent = _.mapValues(_.groupBy(conceptList, 'componentName'), concepts =>
  _.groupBy(concepts, 'openUIName'),
)

export const getSourcesWithComponentConcept = (componentOpenUIName, conceptOpenUIName) => {
  return _.map(_.get(conceptsByComponent, [componentOpenUIName, conceptOpenUIName]), 'sourceName')
}

// Images
export const getImagesForComponentConcept = (componentOpenUIName, conceptOpenUIName) => {
  return _.compact(
    _.map(_.get(conceptsByComponent, [componentOpenUIName, conceptOpenUIName]), 'image'),
  )
}
