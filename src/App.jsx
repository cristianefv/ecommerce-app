import React from 'react';
import '../src/App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test';
import Fetch from './components/testFetch/Fetch';

import Title from './components/Title/Title';

export default function App() {
  return (
    <>
      <Navbar />
      <Title />
      <ItemListContainer />
      <Footer />
      {/* <Fetch /> */}
      {/* <Test /> */}
    </>
  );
}
