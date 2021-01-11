/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: `William Abreu`,
    description: `William Abreu personal website.`,
    author: `William Abreu`,
  },

  plugins: [

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway', 'Source Sans Pro'],
        }
      }
    },

    `gatsby-plugin-sass`,

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },

    /* This (optional) plugin enables Progressive Web App + Offline functionality. To learn more, visit: https://gatsby.dev/offline */
    // `gatsby-plugin-offline`,

  ],

}
