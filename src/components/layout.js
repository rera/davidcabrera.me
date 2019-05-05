import React from 'react'
import { navigate } from './navigate'

import Footer from './footer'
import Header from './header'

import '../styles/main.scss'

class Layout extends React.Component {

  handleScroll = e => {
    const page = document.querySelector('#page')
    if (page.scrollTop > 500) {
      page.classList.add('scrolled')
    }
    else {
      page.classList.remove('scrolled')
    }
  }

  render () {
    return (
      <div id='page' onScroll={this.handleScroll}>
        <Header />
        {this.props.children}
        <Footer />
				<button id="btt" className="button far fa-angle-up" onClick={ () => navigate('#hero')}></button>
      </div>
    )
  }
}

export default Layout
