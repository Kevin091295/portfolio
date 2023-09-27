// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import VisitorCounter from '../components/VisitorCounter';

function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <VisitorCounter />
      {/* Add other sections here */}
    </div>
  );
}

export default Home;
