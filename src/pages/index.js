import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { Button, Grid, Icon, Image } from 'semantic-ui-react';

const IndexPage = () => {
  return (
    <Layout>
      <Grid container textAlign='center'>
        <Grid.Column style={{marginTop: '120px'}}>
          <Image size='big' centered src='https://images.pexels.com/photos/1262972/pexels-photo-1262972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
          <h1>Bienvenue sur ce blog !</h1>
          <h3>Découvrez nos super articles sur tout et n'importe quoi (youhou)</h3>

          <Button as={Link} to='/articles' size='huge' primary animated>
            <Button.Content visible >Voir les articles</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

export default IndexPage
