import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Teaser from "../components/teaser"
import Social from "../components/social"
import Contact from "../components/contact"

export default () =>
	<Layout>
	  <Hero
			name="David Cabrera"
			title="Full Stack Developer"
			location="Jupiter, Florida"
			link="#about"
			linkText="More About Me"
			backgroundImage="http://davidcabrera.me/wp-content/uploads/2014/07/media5.jpg"
		/>
		<About
			imageSrc="https://media.licdn.com/dms/image/C4E03AQFOGv7osA8DqA/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=ci9pSXtkpwl1IoNPxg3m18Z6cjiDMK765wNIUOzc7kg"
			imageAlt="David Cabrera - Full Stack Developer"
			bio="Creative full-stack developer with a passion for user experience and 15+ years of experience in web and ecommerce for diverse verticals. Dynamic hands-on leader with a skill set that spans all aspects of digital experience, acquisition and engagement with expertise in design, development, and data management. Advocate of agile practices and rapid iterative prototyping."
		/>
		<Teaser header="Come on now people let's work together!" link="#contact" linkText="Get in touch" />
		<section id="social">
			<Social platform="LinkedIn" linkText="/FullStackDave" link="https://www.linkedin.com/in/FullStackDave" />
			<Social platform="Twitter" linkText="@FullStackDave" link="http://twitter.com/fullstackdave" />
			<Social platform="Facebook" linkText="/FullStackDave" link="http://facebook.com/FullStackDave" />
			<Social platform="Instagram" linkText="@FullStackDave" link="http://instagram.com/FullStackDave" />
		</section>
		<Contact header="Get in touch" submitText="Send" />
	</Layout>
