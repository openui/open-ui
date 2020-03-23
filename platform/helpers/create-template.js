function createTemplate(/* file path*/ filePath) {
  return new Promise((resolve, reject) => {

     if (filePath === null || undefined) {
       reject('no filePath provided')
     }

      fetch(filePath).then(function(response) {
        return response.text()
      })
      .then(function(html) {
        var parser = new DOMParser()
        var doc = parser.parseFromString(html, "text/html")
        var template = doc.querySelector('template')
        resolve(template.content)
      })
      .catch(function(err) {
        reject(err);
      });

  })
}

export default createTemplate