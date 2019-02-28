import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './global/Navigation'
import Footer from './global/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Navigation />
        <div style={{minHeight:'85vh', marginTop: '50px'}}>
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