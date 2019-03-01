import React from 'react'
import Layout from '../components/layout'
import PostLink from "../components/post-link"
import { Container, Card, Image, Grid } from 'semantic-ui-react';

const Articles = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Container style={{ marginTop: '120px' }}>
        <Grid >
          <Grid.Row>
            <Grid.Column>
              <h1>Tous les articles</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Group itemsPerRow={4}>
                {Posts}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Articles


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            thumbnail
          }
        }
      }
    }
  }
`