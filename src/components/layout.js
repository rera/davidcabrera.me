import React from "react"

import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"

class Layout extends React.Component {
  render() {
    return (
			<div>
				<Header brand="David Cabrera" />
				<main>
					{this.props.children}
				</main>
				<Footer company="Rera Inc." />
			</div>
		)
  }
}

export default Layout
