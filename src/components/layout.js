import React from 'react';
import Header from "../components/Header"
import './layout.css'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

function Layout(props) {
  const { children } = props

  return (
    <StaticQuery
      query={
        graphql`
          {
            site {
              id
              siteMetadata {
                siteTitle
              }
            }
          }
        `
      }
      render={
        data => {
          return (
            <div>
              <Helmet title={data.site.siteMetadata.siteTitle} />
              <Header />
              <div className="layout-content">
                {children}
              </div>
            </div>
          )
        }
      }
    >
    </StaticQuery>
  );
}

export default Layout;