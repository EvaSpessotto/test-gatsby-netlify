import React, { Component } from 'react'
import { Menu, Container, Dropdown } from 'semantic-ui-react'
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
          <Dropdown item text='Tags'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

    )
  }
}

export default Navbar