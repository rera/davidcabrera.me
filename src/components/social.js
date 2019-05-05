import React from 'react'

class Social extends React.Component {
  render () {
    return (
      <article className='social-link'>
        <div>
          <aside className={this.props.platform.toString().toLowerCase()} />
          <div>
            <header>{this.props.platform.toString().toUpperCase()}</header>
            <a href={this.props.link}>{this.props.linkText}</a>
          </div>
        </div>
      </article>
    )
  }
}

export default Social
