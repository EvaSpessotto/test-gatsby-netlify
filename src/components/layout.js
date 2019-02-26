import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './global/Navigation'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  )
}

Layout.prototypes = {
  children: PropTypes.node.isRequired,
}

export default Layout