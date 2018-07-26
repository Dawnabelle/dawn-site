module.exports = {
  siteMetadata: {
    title: 'Dawnabelle In Real Life',
    foobar: 'This is the value of foo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
