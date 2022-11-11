import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import CartProvider from './context/CartContext';
export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* //! COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        {/* //!ACA ABAJO DELCARO RUTAS PUNTUALES */}
        <CartProvider>
          <Navbar />
          <Title />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/estilo/:idcategory" element={<ItemListContainer />} />
            <Route path="/vino-seleccionado/:iditem" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        {/* //! COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */}
        <Footer />
      </BrowserRouter>
    </>
  );
}
