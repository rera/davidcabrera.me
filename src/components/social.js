import React from "react"

class Social extends React.Component {
  render() {
    return (
			<article class="social-link">
				<aside className={this.props.platform.toString().toLowerCase()}></aside>
        <header>{this.props.platform.toString().toUpperCase()}</header>
				<a href={this.props.link}>{this.props.linkText}</a>
			</article>
		)
  }
}

export default Social
