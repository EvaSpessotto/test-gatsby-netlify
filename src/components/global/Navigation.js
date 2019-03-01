import React, { Component } from 'react'
import { Menu, Container, Dropdown } from 'semantic-ui-react'
import { Link, graphql, StaticQuery } from 'gatsby';
import { node } from 'prop-types';


class Navbar extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <StaticQuery
        query={graphql`
        query navQuery {
          allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___tags] }){
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
        render={data => (

          <Menu borderless stackable style={{boxShadow: 'none', border:'none', margin: '0'}}>
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
              <Dropdown item text='Tags' >
                <Dropdown.Menu>
                  {
                    data.allMarkdownRemark.group.map((tag, index) => (
                      <div key={index}>
                        <Dropdown.Item as={Link} to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Dropdown.Item>
                      </div>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Menu>
        )}
      />
    )
  }
}

export default Navbar
