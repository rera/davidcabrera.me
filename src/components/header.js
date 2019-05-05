import React from 'react'
import { navigate } from './navigate'

class Header extends React.Component {
  render () {
    return (
      <header id='header'>
        <a href='/' className='brand'>{this.props.brand}</a>
        <nav id="nav">
          <ul>
            <li><button onClick={ () => navigate('#about')}><i className="menu_icon fa fa-user"></i></button></li>
            <li><button onClick={ () => navigate('#contact')}><i className="menu_icon fa fa-comments"></i></button></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
