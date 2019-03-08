import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { Button, Container, Header, Segment, Image } from 'semantic-ui-react';

const style = {
  background: "#08AEEA",
  height: "100vh",
  background: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)"
}

const IndexPage = () => {
  return (
    <Layout>
      <Container textAlign="center" style={{ marginTop: '10rem', marginBottom: '5rem' }}>
        <Container text>
          <Image src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </Container>
        <h1>Bienvenue sur ce blog !</h1>
        <Button as={Link} to="/articles" style={{ marginBottom: '5rem' }}>Voir les articles</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage

