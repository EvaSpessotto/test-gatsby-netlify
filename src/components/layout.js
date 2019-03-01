import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './global/Navigation'
import Footer from './global/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Navigation />
        <div style={{flex:'1 0 auto', width:'100%'}}>
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