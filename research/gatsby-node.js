const _ = require('lodash')

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

exports.createPages = ({ graphql, actions }) => {
  console.log('sup sup')

  const redirects = [
    {
      fromPath: '/components/popup.research.explainer',
      toPath: '/components/popover.research.explainer',
    },
  ]

  const { createRedirect } = actions

  redirects.forEach(({ fromPath, toPath }) => {
    console.log(fromPath, toPath)

    createRedirect({ fromPath, toPath, isPermanent: true })
  })
}
