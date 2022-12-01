import React from 'react';
import { cartContext } from '../context/CartContextComponent';
import '../styles/Checkout.css';
import '../styles/ItemCartDetail.css';
import Form from './Form';
import ItemCartDetail from './ItemCartDetail';
import PurchasedOrder from './PurchasedOrder';
import { Watch } from 'react-loader-spinner';

export default function Checkout() {
  const { cart, orderCreated } = React.useContext(cartContext);

  return (
    <>
      {cart.length !== 0 ? (
        <>
          <h1 className="titleCheckout">FINALIZA TU COMPRA</h1>
          <div className="checkoutContainer">
            <div className="formContainer">
              <Form />
            </div>
            <ItemCartDetail />
          </div>
        </>
      ) : orderCreated !== '' ? (
        <>
          <PurchasedOrder />
        </>
      ) : (
        <>
          <div className="watchContainer">
            <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        </>
      )}
    </>
  );
}
