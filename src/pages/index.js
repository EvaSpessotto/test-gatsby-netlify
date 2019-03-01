import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { Button, Grid, Icon, Image, Container, Header, Segment } from 'semantic-ui-react';

const style = {
  background: "#08AEEA",
  height: "100vh",
  background: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)"  
}

const IndexPage = () => {
  return (
    <Layout>
      <Container style={style} fluid>
          <Container textAlign="center" style={{paddingTop:'25rem'}}>
            <Header as="h1" inverted>Bienvenue sur ce blog</Header>
            <Button inverted size="huge" style={{marginTop:'1rem'}} as={Link} to='/articles'>Lire les articles</Button>
          </Container>
      </Container>
      </Layout>
  )
}

export default IndexPage

