import React from 'react';
import { Link } from 'gatsby';
import { Grid, Container, Card, Icon, Label, Image } from 'semantic-ui-react';
import Layout from '../components/layout';

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <Container style={{marginTop:'120px'}}>
        <Grid >
          <Grid.Row>
            <h1>Posts about {`${tagName}`}</h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                {
                  posts.map((post, index) => {
                    return (
                      <Card key={index} fluid>
                        <Card.Content>
                          <Card.Header as={Link} to={post.frontmatter.path}>{post.frontmatter.title}</Card.Header>
                          <Card.Meta>{post.frontmatter.date}</Card.Meta>
                          <Card.Description>
                            {
                              post.frontmatter.tags && post.frontmatter.tags.map((tag, index) => {
                                return (
                                  <Label key={index} as={Link} to={`/tags/${tag}`} color="teal">
                                    <Icon name="tag" />{tag}
                                  </Label>
                                )
                              })
                            }
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    )
                  })
                }
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Layout>
  )
}

export default SingleTagTemplate;