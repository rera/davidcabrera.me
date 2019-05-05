import React from 'react'
import { navigate } from './navigate'

class Teaser extends React.Component {
  render () {
    return (
      <section className='teaser'>
        <header>{this.props.header}</header>
        <button className='button white tall' onClick={() => navigate(this.props.link)}>{this.props.linkText}</button>
      </section>
    )
  }
}

export default Teaser
