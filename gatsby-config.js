/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GTM-NG98NTL", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      }
    },
  ],
  siteMetadata: {
    title: 'Warmly',
    description: 'Warmly | HomeServe',
    author: 'HomeServe',
    siteUrl: 'https://www.warmly.co.uk',
  }
}
