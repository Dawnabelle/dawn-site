module.exports = {
  siteMetadata: {
    title: 'Dawn In Real Life',
    foobar: 'This is the value of foo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'project-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
