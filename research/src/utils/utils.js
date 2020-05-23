import Bowser from 'bowser'

export const ensureObjectProperty = (obj, key) => {
  if (!obj[key]) {
    obj[key] = {}
  }
}

const browsers = {
  'Internet Explorer': 'ie',
  'Microsoft Edge': 'edge',
  Firefox: 'firefox',
  Chromium: 'chrome',
  Chrome: 'chrome',
  Electron: 'electron',
  Safari: 'safari',
}

export const getBrowserInfo = () => {
  if (typeof window !== `undefined`) {
    const browser = Bowser.getParser(window.navigator.userAgent).getBrowser()
    return {
      name: browsers[browser.name],
      version: browser.version,
    }
  } else {
    return { name: 'unknown' }
  }
}

export const downloadJson = (fileName, doc) => {
  if (typeof window !== `undefined`) {
    const content = JSON.stringify(doc, null, 2)
    const contentType = 'application/json;charset=utf-8;'
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      const blob = new Blob([decodeURIComponent(encodeURI(content))], { type: contentType })
      navigator.msSaveOrOpenBlob(blob, fileName)
    } else {
      const a = document.createElement('a')
      a.download = fileName
      a.href = 'data:' + contentType + ',' + encodeURIComponent(content)
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
}
