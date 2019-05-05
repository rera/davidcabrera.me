import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            company
          }
        }
      }
    `}
    render={data => (
      <footer id='footer'>
				&copy; {(new Date().getFullYear())} {data.site.siteMetadata.company}
      </footer>
    )}
  />
)
