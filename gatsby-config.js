module.exports = {
  plugins: [
	  {
	    resolve: `gatsby-plugin-sass`,
	    options: {
	      implementation: require('node-sass')
	    }
	  }
  ],
  siteMetadata: {
    name: 'David Cabrera',
    company: 'Rera Inc.',
    title: 'Full Stack Developer',
    location: 'Jupiter, Florida',
    bio: 'Creative full-stack developer and hands-on leader with a passion for user experience and 15+ year career building web and ecommerce solutions for diverse verticals. Dynamic skill set that spans digital experience, acquisition, and engagement with expertise in design, development, and data management. Advocate of agile practices and rapid iterative prototyping.',
    social: [
      {
        platform: 'LinkedIn',
        handle: '/FullStackDave',
        link: 'https://www.linkedin.com/in/FullStackDave' },
      {
        platform: 'Github',
        handle: '@FullStackDave',
        link: 'https://github.com/rera' },
      {
        platform: 'Facebook',
        handle: '/FullStackDave',
        link: 'http://facebook.com/FullStackDave' },
      {
        platform: 'Instagram',
        handle: '@FullStackDave',
        link: 'http://instagram.com/FullStackDave' }
    ]
  }
}
