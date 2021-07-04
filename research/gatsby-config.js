const images = require('remark-images')
const emoji = require('remark-emoji')

module.exports = {
  siteMetadata: {
    title: 'Open UI',
    description: 'Open UI ',
    author: 'Open UI',
    githubURL: 'https://github.com/WICG/open-ui',
    siteUrl: 'https://open-ui.org/',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `pages`, path: `${__dirname}/src/pages` },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        remarkPlugins: [images, emoji],
      },
    },

    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo-green.png',
      },
    },

    'gatsby-plugin-react-helmet',

    // TODO: gatsby-plugin-manifest throws an error locally:
    //       objc[60503]: Class GNotificationCenterDelegate is implemented in both
    //         - sharp/vendor/lib/libgio-2.0.0.dylib (0x113160578)
    //         - gatsby-plugin-manifest/node_modules/sharp/vendor/lib/libgio-2.0.0.dylib (0x1165c9578).
    //       One of the two wil...
    //
    // TODO: It also throws another error on Netlify failing the deploy:
    //       .nvm/versions/node/v12.10.0/bin/node: symbol lookup error:
    //         node_modules/gatsby-plugin-manifest/node_modules/sharp/build/Release/sharp.node:
    //           undefined symbol: _ZNK4vips6VImage7pngsaveEPKcPNS_7VOptionE
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Open UI',
    //     short_name: 'OUI',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#00a453',
    //     display: 'minimal-ui',
    //     icon: 'src/images/logo-green.png', // This path is relative to the root of the site.
    //   },
    // },

    'gatsby-plugin-remove-trailing-slashes',

    `gatsby-plugin-advanced-sitemap`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },

    'gatsby-plugin-fontawesome-css',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
