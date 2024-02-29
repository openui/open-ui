import antd from './antd.json'
import atlassian from './atlassian.json'
import auth0 from './auth0.json'
import boosted from './boosted.json'
import bootstrap from './bootstrap.json'
import carbon from './carbon.json'
import chromium from './chromium.json'
import edge from './edge.json'
import evergreen from './evergreen.json'
import fabric from './fabric.json'
import fast from './fast.json'
import firefox from './firefox.json'
import goodbarber from './goodbarber.json'
import kolibri from './kolibri.json'
import lightning from './lightning.json'
import lion from './lion.json'
import materialComponentsWeb from './materialComponentsWeb.json'
import materialUI from './materialUI.json'
import primer from './primer.json'
import semantic from './semantic.json'
import spectrum from './spectrum.json'
import stardust from './stardust.json'
import tailwind from './tailwind.json'
import w3 from './w3.json'
import web from './web.json'
import webkit from './webkit.json'

// Sources
export const sources = [
  antd,
  atlassian,
  auth0,
  boosted,
  bootstrap,
  carbon,
  chromium,
  edge,
  evergreen,
  fabric,
  fast,
  firefox,
  goodbarber,
  kolibri,
  lightning,
  lion,
  materialComponentsWeb,
  materialUI,
  primer,
  semantic,
  spectrum,
  stardust,
  tailwind,
  w3,
  web,
  webkit,
].map((source) => ({
  ...source,
  components: source.components.map((component) => {
    const componentOpenUIName = component.openUIName || component.name
    return {
      ...component,
      sourceName: source.name,
      openUIName: componentOpenUIName,
      concepts: component.concepts?.map((concept) => {
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
export const groupBy = (items, callbackFn) => {
  return items.reduce((acc, currentValue, currentIndex) => {
    let groupKey = callbackFn(currentValue, currentIndex)
    if (!acc[groupKey]) {
      acc[groupKey] = []
    }
    acc[groupKey].push(currentValue)
    return acc
  }, {})
}

export const get = (obj, path, defValue) => {
  // If path is not defined or it has false value
  if (!path) return undefined
  // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
  // Regex explained: https://regexr.com/58j0k
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  // Find value
  const result = pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
  // If found value is undefined return default value; otherwise return the value
  return result === undefined ? defValue : result
}

export const uniqBy = (arr, iteratee) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee
    iteratee = (item) => item[prop]
  }

  return arr.filter((x, i, self) => i === self.findIndex((y) => iteratee(x) === iteratee(y)))
}

export const sourceNames = sources.map((source) => source.name)
export const sourcesCount = sources.length

// Components
const componentList = sources.flatMap((source) => source.components)
export const componentOriginalNames = componentList.map((component) => component.name)
export const componentsByName = groupBy(componentList, (component) => component.openUIName)

// Concepts
const conceptList = componentList.flatMap((component) => component.concepts).filter(Boolean)

export const openUIConceptsByComponent = Object.fromEntries(
  Object.entries(groupBy(conceptList, (concept) => concept.componentName)).map(([key, value]) => [
    key,
    groupBy(value, (concept) => concept.openUIName),
  ]),
)

export const conceptsByComponent = Object.fromEntries(
  Object.entries(groupBy(conceptList, (concept) => concept.componentName)).map(([key, value]) => [
    key,
    groupBy(value, (concept) => concept.name),
  ]),
)

export const getSourcesWithComponentConcept = (
  componentName,
  conceptName,
  conceptOpenUIName = conceptName,
) => [
  ...new Set(
    get(conceptsByComponent, [componentName, conceptName])
      .filter((concept) => concept.name === conceptName && concept.openUIName === conceptOpenUIName)
      .map((concept) => concept.sourceName),
  ),
]

// Images
export const getImagesForComponentConcept = (componentOpenUIName, conceptOpenUIName) =>
  get(openUIConceptsByComponent, [componentOpenUIName, conceptOpenUIName]).filter(Boolean)
