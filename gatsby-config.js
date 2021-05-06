/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    author: `@sayan_m_`,
    twitterUsername: "@sayan_m_",
    image: "/twitter-img.png",
    siteUrl: "https://sayanmukherjee.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`, `products`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Sans Serif", "Open Sans"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "NDEwNmI3OWQtZmI0OC00OThjLWFjYzctMDE4NDI1Zjg3NTg4NjM3MjY4NjQxNTkyMDE3Nzk5",
      },
    },
  ],
}
