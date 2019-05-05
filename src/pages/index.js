import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Teaser from '../components/teaser'
import Social from '../components/social'
import Contact from '../components/contact'

export default () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
						title
						location
						photo
						bio
						social {
							platform
							handle
							link
						}
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Hero
          name={data.site.siteMetadata.name}
          title={data.site.siteMetadata.title}
          location={data.site.siteMetadata.location}
          link='#about'
          linkText='More About Me'
          backgroundImage='http://davidcabrera.me/wp-content/uploads/2014/07/media5.jpg'
		    />
        <main>
          <About
            imageSrc={data.site.siteMetadata.photo}
            imageAlt={data.site.siteMetadata.name + ' - ' + data.site.siteMetadata.title}
            bio={data.site.siteMetadata.bio}
		      />
          <Teaser header="Come on now people let's work together!" link='#contact' linkText='Get in touch' />
          <section id='social'>
            {data.site.siteMetadata.social.map((item) =>
              <Social platform={item.platform} linkText={item.handle} link={item.link} key={item.platform} />
            )}
          </section>
          <Contact header='Get in touch' submitText='Send' />
        </main>
      </Layout>
    )}
  />
)
