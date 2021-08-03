import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import "../assets/css/styles.css"

const Menu = ({ data }) => (
  <Layout>
    <SEO title="Menu" />
    <h1>My WordPress Menu</h1>
      <h4>Posts</h4>
      <section className="posts-container">
        {data.wpMenu.menuItems.nodes.map((listmenu) => (
          <div className="post-preview" key={listmenu.url}>

     
            <Link to={listmenu.url}>
              {listmenu.label}
            </Link>
          </div>
        ))}
      </section>



  </Layout>


)
export default Menu
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            slug

              featuredImage  {
                node {
                  id
           
                  sourceUrl
                }
              }

        }
    }

        wpMenu {
          id
          menuItems {
            nodes {
              parentId
              label
              url
              childItems {
                nodes {
                  path
                  label
                }
              }
            }
          }
        }


  }
`