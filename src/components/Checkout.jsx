import React from 'react';
import ItemCartDetail from './ItemCartDetail';
import Form from './Form';
import '../styles/Form.css';
import '../styles/ItemCartDetail.css';
import '../styles/Checkout.css';

export default function Checkout() {
  return (
    <>
      <h1 className="titleCheckout">Finaliza tu compra</h1>
      <div className="checkoutContainer">
        <Form />
        <ItemCartDetail />
      </div>
    </>
  );
}
