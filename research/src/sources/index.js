import _ from 'lodash'

import antd from './antd.json5'
import atlassian from './atlassian.json5'
import auth0 from './auth0.json5'
import bootstrap from './bootstrap.json5'
import carbon from './carbon.json5'
import chromium from './chromium.json5'
import evergreen from './evergreen.json5'
import fabric from './fabric.json5'
import fast from './fast.json5'
import lightning from './lightning.json5'
import lion from './lion.json5'
import materialComponentsWeb from './materialComponentsWeb.json5'
import primer from './primer.json5'
import semantic from './semantic.json5'
import spectrum from './spectrum.json5'
import stardust from './stardust.json5'
import w3 from './w3.json5'
import web from './web.json5'

// Sources
export const sources = [
  antd,
  atlassian,
  auth0,
  bootstrap,
  carbon,
  chromium,
  evergreen,
  fabric,
  fast,
  lightning,
  lion,
  materialComponentsWeb,
  primer,
  semantic,
  spectrum,
  stardust,
  w3,
  web,
].map((source) => ({
  ...source,
  components: source.components.map((component) => {
    const componentOpenUIName = component.openUIName || component.name
    return {
      ...component,
      sourceName: source.name,
      openUIName: componentOpenUIName,
      concepts: _.map(component.concepts, (concept) => {
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

  _.forEach(src.components, (comp) => {
    acc[src.name][comp.openUIName] = {}

    _.forEach(comp.concepts, (con) => {
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
export const anatomiesByComponent = _.mapValues(componentsByName, (components) =>
  _.compact(_.uniqBy(_.flatMap(components, 'anatomy'), 'name')),
)

// Concepts
const conceptList = _.compact(_.flatMap(componentList, 'concepts'))

export const openUIConceptsByComponent = _.mapValues(
  _.groupBy(conceptList, 'componentName'),
  (concepts) => _.groupBy(concepts, 'openUIName'),
)

export const conceptsByComponent = _.mapValues(
  _.groupBy(conceptList, 'componentName'),
  (concepts) => _.groupBy(concepts, 'name'),
)

export const getSourcesWithComponentConcept = (
  componentName,
  conceptName,
  conceptOpenUIName = conceptName,
) =>
  _.uniq(
    _.map(
      _.get(conceptsByComponent, [componentName, conceptName]).filter(
        (concept) => concept.name === conceptName && concept.openUIName === conceptOpenUIName,
      ),
      'sourceName',
    ),
  )

// Images
export const getImagesForComponentConcept = (componentOpenUIName, conceptOpenUIName) =>
  _.compact(_.map(_.get(openUIConceptsByComponent, [componentOpenUIName, conceptOpenUIName])))

// Images for component
export const getImagesForComponent = (componentOpenUIName) => {
  const images = []
  const arr = _.map(_.get(openUIConceptsByComponent, componentOpenUIName), (val) =>
    _.map(val, (v) => v.image),
  )
  arr.forEach((a) => a.forEach((i) => images.push(i)))
  return images
}
