import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    {/* <Header navPosition="right" /> */}
    <main className="site-content">
      {children}
    </main>
    <Footer className="illustration-section-06" />
  </React.Fragment>
);

export default LayoutDefault;  