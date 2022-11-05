import React from 'react';
import '../src/App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto';
import Title from './components/Title/Title';

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* //! COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <Navbar />
        <Title />
        {/* //!ACA ABAJO DELCARO RUTAS PUNTUALES */}
        <Routes>
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/estilo/:idcategory" element={<ItemListContainer />} />
          <Route path="/vino-seleccionado/:iditem" element={<ItemDetailContainer />} />
        </Routes>
        {/* //! COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO */}
        <Footer />
      </BrowserRouter>
    </>
  );
}
