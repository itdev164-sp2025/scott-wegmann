import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data}) => {
    const { title} = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{_html: ReportBody.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`

    query blogPostQuery($sLug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
              childMarkdownRemark {
              html
              }
            }
        }
    }
`