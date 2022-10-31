import React from 'react';
import '../src/App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </>
  );
}
