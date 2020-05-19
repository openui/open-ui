const _ = require('lodash')
const express = require('express')

// based on https://github.com/gatsbyjs/gatsby/issues/17761
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.json5$/,
          use: ['json5-loader'],
        },
      ],
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const newPath = _.get(page.context, 'frontmatter.path')

  if (newPath && page.path !== newPath) {
    deletePage(page)
    page.path = newPath
    createPage(page)
  }
}
