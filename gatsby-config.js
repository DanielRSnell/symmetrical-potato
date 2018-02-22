module.exports = {
  siteMetadata: {
    title: `Gatsby with GraphCMS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graph.cool/simple/v1/cjazynkxt0xkj01926xxwnp9m`,
        query: `{
      	allIcoProfiles {
          id
          name
          logo
          desc
        }
      }`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby with GraphCMS',
        short_name: 'Gatsby GCMS',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#61045f',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-antd'
  ],
}
