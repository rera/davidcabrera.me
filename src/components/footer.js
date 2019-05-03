import React from "react"

class Footer extends React.Component {
  render() {
    return (
			<footer id="footer">
				&copy;{(new Date().getFullYear())} {this.props.company}
			</footer>
		)
  }
}

export default Footer
