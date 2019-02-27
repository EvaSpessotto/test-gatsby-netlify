import React from "react"
import { Link } from "gatsby"
import { Card, Button } from 'semantic-ui-react';

const PostLink = ({ post:{ frontmatter } }) => (
  <Card fluid>
    <Card.Content as={Link} to={frontmatter.path}>
      <Card.Header>{frontmatter.title}</Card.Header>
      <Card.Meta>{frontmatter.date}</Card.Meta>
      <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      {
        frontmatter.tags && frontmatter.tags.map((tag, index) => {
          return (
            <Button key={index}>{tag}</Button>
          )
        })
      }
    </Card.Content>
  </Card>
)

export default PostLink