import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { navigate } from './navigate'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            name
          }
        }
      }
    `}
    render={data => (
      <header id='header'>
        <button onClick={() => navigate('#hero')} className='brand'>{data.site.siteMetadata.name}</button>
        <nav id='nav'>
          <ul>
            <li><button onClick={() => navigate('#about')}><i className='menu_icon fa fa-user' /></button></li>
            <li><button onClick={() => navigate('#contact')}><i className='menu_icon fa fa-comments' /></button></li>
          </ul>
        </nav>
      </header>
    )}
  />
)
