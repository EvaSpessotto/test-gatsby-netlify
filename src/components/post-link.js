import React from "react"
import { Link } from "gatsby"
import { Card } from 'semantic-ui-react';

const PostLink = ({ post }) => (
  <Card fluid>
    <Card.Content as={Link} to={post.frontmatter.path}>
      <Card.Header>{post.frontmatter.title}</Card.Header>
      <Card.Meta>{post.frontmatter.date}</Card.Meta>
      <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
    </Card.Content>
  </Card>
)

export default PostLink