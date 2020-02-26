/**
 * Transforms a provided string using kebab-case as a sentence with spaces
 *
 * @param {string} string String to convert as a sentence
 */
export function kebabCaseToSentence(string) {
  const stringWithoutDashes = string.replace(/-/g, ' ')
  const firstChar = stringWithoutDashes.charAt().toUpperCase()

  return firstChar + stringWithoutDashes.slice(1)
}

/**
 * Removes the extension from a filename provided as a string
 *
 * @param {string} string Filename to remove the extension from
 */
export function removeExtensionFromFilename(string) {
  return string
    .split('.')
    .slice(0, -1)
    .join('.')
}
