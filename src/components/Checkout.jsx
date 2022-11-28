import React from 'react';
import CartDetail from './CartDetail';
import Form from './Form';
import '../styles/Form.css';
import '../styles/CartDetail.css';

export default function Checkout() {
  return (
    <>
      <h1>Finaliza tu compra</h1>
      <Form />
      <CartDetail />
    </>
  );
}
