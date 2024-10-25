module.exports = {
  siteMetadata: {
    title: 'Fizjoterapia Kobieca',
    siteUrl: 'https://femi-vital.pl/',
    description:
      'Fizjoterapia kobieca na Górnym Śląsku. Profesjonalna opieka w czasie ciąży i po porodzie, mobilizacja blizn, terapia schorzeń dna miednicy.',
    keywords: ['uroginekolog', 'czeladź', 'Iwona Mazur-Ważny uroginekolog', 'fizjoterapia kobieca'],
    image: {
      src: '/meta-image.jpg',
      height: '630px',
      width: '1200px',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team',
        path: `${__dirname}/src/team/`,
      },
      __key: 'team',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:400,500,600`, `cormorant\:400,400i,500,500i`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -110,
      },
    },
  ],
};
