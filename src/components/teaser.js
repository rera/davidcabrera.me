import React from 'react'

class Teaser extends React.Component {
  render () {
    return (
      <section className='teaser'>
        <header>{this.props.header}</header>
        <a className='button white tall' href={this.props.link}>{this.props.linkText}</a>
      </section>
    )
  }
}

export default Teaser
