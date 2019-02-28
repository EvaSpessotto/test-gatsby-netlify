import React from 'react'
import Layout from '../components/layout'
import PostLink from "../components/post-link"
import { Container, Card, Image } from 'semantic-ui-react';

const Articles = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Image src="https://www.oboqo.com/wp-inside/uploads/2018/01/site-wordpress.jpg" fluid/>
      <Container style={{marginTop:'120px'}}>
        <h1>Tous les articles</h1>
        
        <Card.Group>
          {Posts}
        </Card.Group>
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
          }
        }
      }
    }
  }
`