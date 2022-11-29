import React from 'react';
import CartDetail from './CartDetail';
import Form from './Form';
import '../styles/Form.css';
import '../styles/CartDetail.css';
import '../styles/Checkout.css';

export default function Checkout() {
  return (
    <>
      <h1 className="titleCheckout">Finaliza tu compra</h1>
      <div className="checkoutContainer">
        <Form />
        <CartDetail />
      </div>
    </>
  );
}
