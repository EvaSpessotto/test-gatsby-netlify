import React from "react"
import { Link } from "gatsby"
import { Card, Label, Icon, Image } from 'semantic-ui-react';

const PostLink = ({ post: { frontmatter } }) => (
  <Card>
    <Image src={frontmatter.thumbnail && frontmatter.thumbnail} />
    <Card.Content>
      <Card.Header as={Link} to={frontmatter.path}>{frontmatter.title}</Card.Header>
      <Card.Meta>{frontmatter.date}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      {
        frontmatter.tags && frontmatter.tags.map((tag, index) => {
          return (
            <Label key={index} as={Link} to={`/tags/${tag}`} color="teal">
              <Icon name="tag" />{tag}
            </Label>
          )
        })
      }
    </Card.Content>
  </Card>
)

export default PostLink