/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  defaultTheme,
  ThemeProvider,
  Preflight
} from "@xstyled/styled-components"
import Header from "./header"
//import "./layout.css"
import { x } from "@xstyled/styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = {
    ...defaultTheme
    // Customize your theme here
  }

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
