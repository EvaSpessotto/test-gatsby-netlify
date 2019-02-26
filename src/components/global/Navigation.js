import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'gatsby';


class Navbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu size='massive' pointing borderless stackable>
        <Container>
          <Menu.Item 
            as={Link}
            to='/'
            name='SuperBlog' 
            active={activeItem === 'SuperBlog'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item
            as={Link}
            to='/articles'
            name='articles'
            active={activeItem === 'articles'}
            onClick={this.handleItemClick}
            position='right'
          />
          <Menu.Item
            name='Tags'
            active={activeItem === 'Tags'}
            onClick={this.handleItemClick}
          />
        </Container>
      </Menu>

    )
  }
}

export default Navbar