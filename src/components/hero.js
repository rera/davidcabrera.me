import React from "react"

class Hero extends React.Component {
  render() {
    return (
			<section id="hero" style={{backgroundImage: `url(${this.props.backgroundImage})`}}>
				<header>
					<h1>{this.props.name}</h1>
					<h2>
						<strong>{this.props.title}</strong>
						{this.props.location}
					</h2>
					<a href={this.props.link}>{this.props.linkText}</a>
				</header>
			</section>
		)
  }
}

export default Hero
