import React from 'react'

class Hero extends React.Component {
  render () {
    return (
      <section id='hero'>
        <div className='background' style={{ backgroundImage: `url(${this.props.backgroundImage})` }} />
        <header className='animate fade-in'>
          <h1>{this.props.name}</h1>
          <h2>
            <strong>{this.props.title}</strong>
						from {this.props.location}
          </h2>
          <a className='button green' href={this.props.link}>{this.props.linkText}</a>
        </header>
      </section>
    )
  }
}

export default Hero
