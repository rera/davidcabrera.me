import React from "react"

class Teaser extends React.Component {
  render() {
    return (
			<section class="teaser">
				<header>{this.props.title}</header>
				<a href={this.props.link}>{this.props.linkText}</a>
			</section>
		)
  }
}

export default Teaser
