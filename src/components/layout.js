import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './global/Navigation'
import Footer from './global/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
        <div style={{ flex: '1' }}>
          {children}
        </div>
      <Footer />
    </div>
  )
}

Layout.prototypes = {
  children: PropTypes.node.isRequired,
}

export default Layout