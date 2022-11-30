import React from 'react';
import { cartContext } from '../context/CartContextComponent';
import '../styles/Checkout.css';
import '../styles/Form.css';
import '../styles/ItemCartDetail.css';
import Form from './Form';
import ItemCartDetail from './ItemCartDetail';
import PurchasedOrder from './PurchasedOrder';

export default function Checkout() {
  const { cart, orderCreated } = React.useContext(cartContext);

  return (
    <>
      {cart.length !== 0 ? (
        <>
          <h1 className="titleCheckout">Finaliza tu compra</h1>
          <div className="checkoutContainer">
            <Form />
            <ItemCartDetail />
          </div>
        </>
      ) : orderCreated !== '' ? (
        <>
          <PurchasedOrder />
        </>
      ) : (
        <>
          {/* //!SPINNER */}
          <h1>NO TENES NADA QUE HACER ACA</h1>
        </>
      )}
    </>
  );
}
