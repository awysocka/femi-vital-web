module.exports = {
  siteMetadata: {
    title: `Femi Vital`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/femi-vital-logo.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:400,500`, `cormorant\:400,400i,500,500i`],
        display: 'swap',
      },
    },
  ],
};
