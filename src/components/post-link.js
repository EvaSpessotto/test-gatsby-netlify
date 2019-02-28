import React from "react"
import { Link } from "gatsby"
import { Card, Label, Icon } from 'semantic-ui-react';

const PostLink = ({ post:{ frontmatter } }) => (
  <Card fluid>
    <Card.Content >
      <Card.Header as={Link} to={frontmatter.path}>{frontmatter.title}</Card.Header>
      <Card.Meta>{frontmatter.date}</Card.Meta>
      <Card.Description></Card.Description>
      {
        frontmatter.tags && frontmatter.tags.map((tag, index) => {
          return (
            <Label key={index}>
              <Icon name="tag" />{tag}
            </Label>
          )
        })
      }
    </Card.Content>
  </Card>
)

export default PostLink