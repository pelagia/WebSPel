import React from "react"
import { graphql } from "gatsby"

import LayoutPage from "../components/layoutPage"

export default ({ data }) => (
  <LayoutPage>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
     To be continued
    </p>
  </LayoutPage>
)
export const query = graphql`
    query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
