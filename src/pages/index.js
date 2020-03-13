import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/App/Layout"
import Promo from "../components/Promo/Promo"
import Items from "../components/Items/Items"

export default () => {
  const query = useStaticQuery(graphql`
    query items {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              price
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Promo />
      <Items query={query} />
    </Layout>
  )
}
