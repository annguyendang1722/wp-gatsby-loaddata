import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
    
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>

      <Header>
      </Header>

      <main>{children}</main>

      <Footer>
      </Footer>
    </div>
  )
}

export default Layout
