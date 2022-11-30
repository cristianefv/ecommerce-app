import React from 'react';
import { cartContext } from '../context/CartContextComponent';
import '../styles/Checkout.css';
import '../styles/Form.css';
import '../styles/ItemCartDetail.css';
import Form from './Form';
import ItemCartDetail from './ItemCartDetail';

export default function Checkout() {
  const { cart } = React.useContext(cartContext);

  return (
    <>
      {cart.length ? (
        <>
          <h1 className="titleCheckout">Finaliza tu compra</h1>
          <div className="checkoutContainer">
            <Form />
            <ItemCartDetail />
          </div>
        </>
      ) : (
        <>
          <h1>NO TENES NADA QUE HACER ACA</h1>
        </>
      )}
    </>
  );
}
