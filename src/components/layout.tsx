/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import './assets/Global.scss';
import "./layout.css"
import Navbar from "./navbar/Navbar"
import Footer from "./Footer/Footer";
import DarKModeContext from "./assets/context";

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
  const [isDark, setIsDark]: [boolean, any] = React.useState<boolean>(false)
  // **************************************************************************
  // no need to keep this line in production
  React.useEffect(() => {
    console.log(isDark)
  }, [isDark])

  // **************************************************************************

  return (
    <DarKModeContext.Provider value={{ isDark, setIsDark }}>
      <Navbar />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </DarKModeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout