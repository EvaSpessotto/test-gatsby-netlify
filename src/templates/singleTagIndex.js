import React from 'react';
import { Link } from 'gatsby';
import { Grid, Container, Card, Icon, Label, Image } from 'semantic-ui-react';
import Layout from '../components/layout';
import PostLink from '../components/post-link'

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <Container style={{ marginTop: '120px' }}>
        <Grid >
          <Grid.Row>
            <h1>Posts about {`${tagName}`}</h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                {
                  posts.map((post, index) => {
                    const { frontmatter } = post;
                    return (
                      <Card key={index}>
                        <Image src={frontmatter.thumbnail} style={{height:'200px'}} />
                        <Card.Content>
                          <Card.Header as={Link} to={frontmatter.path}>{frontmatter.title}</Card.Header>
                          <Card.Meta>{frontmatter.date}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                          {
                            frontmatter.tags && frontmatter.tags.map((tag, index) => {
                              return (
                                <Label key={index} as={Link} to={`/tags/${tag}`} color="teal"  style={{marginBottom:'5px'}}>
                                  <Icon name="tag" />{tag}
                                </Label>
                              )
                            })
                          }
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