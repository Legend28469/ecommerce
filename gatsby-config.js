module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // Needed this plugin to process product images in markdown
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["image"],
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`],
          },
          {
            family: `Montserrat`,
            variants: [`300`, `700`],
          },
        ],
      },
    },
  ],
}
