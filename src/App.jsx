import '../src/App.css';
import '../src/components/CartWidget/CartWidget.css';
import '../src/components/Footer/Footer.css';
import '../src/components/ItemCount/ItemCount.css';
import '../src/components/ItemListContainer/ItemListContainer.css';
import '../src/components/Navbar/Navbar.css';

import React from 'react';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <ItemCount />
      <ItemListContainer greeting={true} />
      <Footer />
    </>
  );
}
