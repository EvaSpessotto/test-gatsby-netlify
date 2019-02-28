import React from 'react';
import { graphql, Link } from 'gatsby';
import { Grid, Container, Card, Icon, Label } from 'semantic-ui-react';
import Layout from '../components/layout';

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <Container>
        <div>
          Posts about {`${tagName}`}
        </div>
        <div>
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
                              <Label key={index}>
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
        </div>
      </Container>
    </Layout>
  )
}

export default SingleTagTemplate;