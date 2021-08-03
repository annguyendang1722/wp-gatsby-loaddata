import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    wpMenu(menuItems: {nodes: {}}, name: {}, slug: {}) {
      id
      menuItems {
        nodes {
          url
          label
        }
      }
    }
  }
`

export default ComponentName