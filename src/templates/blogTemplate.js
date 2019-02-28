import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import { Container, Image, Label, Icon, Grid } from 'semantic-ui-react'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container className="blog-post" style={{ marginTop: '50px' }}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>{frontmatter.title}</h1>
              <h4>{frontmatter.date}</h4>
              {
                frontmatter.tags && frontmatter.tags.map((tag, index) => {
                  return (
                    <Label key={index}>
                      <Icon name="tag" />{tag}
                    </Label>
                  )
                })
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div
                style={{ marginTop: '50px', marginBottom: '50px' }}
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
        tags
      }
    }
  }
`