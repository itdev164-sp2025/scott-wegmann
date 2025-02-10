import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = ({data}) => (
  <Layout>
    <ul className={styles.list}>
      {
        data.allContentfulBlogPost.edges.map(edge =>(
          <li key={edge.node.id}>
            <link to={edge.node.slug}>{edge.node.title}</link>
          </li>
        ))
      }
      </ul>
      
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{

  allContentfulBlogPost {
  edges{
    node{
      id
      title
      slug
        }
      }
    }
  }
    `
