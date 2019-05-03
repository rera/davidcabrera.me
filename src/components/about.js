import React from "react"

class About extends React.Component {
  render() {
    return (
			<section id="about">
				<figure>
					<img src={this.props.imageSrc} alt={this.props.imageAlt} />
				</figure>
				<p>{this.props.bio}</p>
			</section>
		)
  }
}

export default About
