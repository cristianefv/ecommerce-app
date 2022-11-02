import React from 'react';
import '../src/App.css';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

import Title from './components/Title/Title';

export default function App() {
  return (
    <>
      <Navbar />
      <Title />
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
      <Footer />
    </>
  );
}
