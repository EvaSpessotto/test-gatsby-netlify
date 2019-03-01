import React from 'react'
import { Grid, List, Segment, Container } from 'semantic-ui-react'

const Footer = () => {

  return (
    <Grid>
      <Grid.Column >
        <Container textAlign='right' >
          <List bulleted horizontal style={{marginTop: '3rem'}}>
            <List.Item>A propos de SuperBlog</List.Item>
            <List.Item>Nous contacter</List.Item>
            <List.Item>Mentions Légales</List.Item>
          </List>
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default Footer