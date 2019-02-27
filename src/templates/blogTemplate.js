import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import { Container, Image } from 'semantic-ui-react'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container className="blog-post" style={{marginTop:'50px'}}>
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4>
        <Image src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?cs=srgb&dl=atmosphere-cloudiness-clouds-844297.jpg&fm=jpg" />
        <div
          style={{marginTop:'50px', marginBottom:'50px'}}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`