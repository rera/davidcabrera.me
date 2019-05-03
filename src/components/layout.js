import React from "react"

import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"

class Layout extends React.Component {
  render() {
    return (
			<div id="page">
				<Header brand="David Cabrera" />
				{this.props.children}
				<Footer company="Rera Inc." />
			</div>
		)
  }
}

export default Layout
