import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import "../assets/css/styles.css"



const BlogPage = ({ data}) => {
  // const featuredImage = {
  //   fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: post.featuredImage?.node?.alt || ``,
  // }
  return (
  <Layout>
    <SEO title="Blog" />
    <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      <section className="posts-container">
        {data.allWpPost.nodes.map((post) => (
          
          <div className="post-preview" key={post.slug}>
  
            <Link to={post.slug}>
              {post.title}
            </Link>
            <div>{post.content}</div>
            <div>{post.excerpt}</div>
           
            
          </div>
         
        ))}
      </section>
  </Layout>
  )
}

export default BlogPage
export const pageQuery = graphql`
  query {
  allWpPost {
    nodes {
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      excerpt
      content
      categories {
        nodes {
          name
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
              path
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
