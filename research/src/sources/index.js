import _ from 'lodash'

import sliderTests from './slider.tests.json5'

const allTests = [sliderTests]

// Tests
export const sources = _.keyBy(
  allTests.map((test) => ({
    ...test,
  })),
  'name',
)

export const getVariantNames = (component) => {
  const componentTests = sources[component]
  const variantsMap = {}
  if (componentTests) {
    componentTests.variants.map((v) => v.names.map((n) => (variantsMap[n] = true)))
  }
  return Object.keys(variantsMap)
}

export const getComponentTestSteps = (component, variant, mode) => {
  const componentTests = sources[component]
  return componentTests.variants.filter((v) => v.names.indexOf(variant) >= 0)[0][mode]
}

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
  _.map(
    _.get(conceptsByComponent, [componentName, conceptName]).filter(
      (concept) => concept.name === conceptName && concept.openUIName === conceptOpenUIName,
    ),
    'sourceName',
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
