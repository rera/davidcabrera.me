import React from "react"

class Header extends React.Component {
  render() {
    return (
			<header id="header">
				<a href="/" class="brand">{this.props.brand}</a>
			</header>
		)
  }
}

export default Header
