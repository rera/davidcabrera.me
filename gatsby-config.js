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
    photo: 'https://media.licdn.com/dms/image/C4E03AQFOGv7osA8DqA/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=ci9pSXtkpwl1IoNPxg3m18Z6cjiDMK765wNIUOzc7kg',
    bio: 'Creative full-stack developer with a passion for user experience and 15+ years of experience in web and ecommerce for diverse verticals. Dynamic hands-on leader with a skill set that spans all aspects of digital experience, acquisition and engagement with expertise in design, development, and data management. Advocate of agile practices and rapid iterative prototyping.',
    social: [
      {
        platform: 'LinkedIn',
        handle: '/FullStackDave',
        link: 'https://www.linkedin.com/in/FullStackDave' },
      {
        platform: 'Twitter',
        handle: '@FullStackDave',
        link: 'http://twitter.com/fullstackdave' },
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
