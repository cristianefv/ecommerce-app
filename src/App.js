import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Title from './components/Title';
import CartContextComponent from './context/CartContextComponent';

export default function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Title />
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/estilo/:idcategory" element={<ItemListContainer />} />
            <Route path="/vino-seleccionado/:iditem" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}
