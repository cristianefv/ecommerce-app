import React, { useContext } from 'react';
import { cartContext } from '../context/CartContextComponent';

export default function Counter() {
  const { cart } = useContext(cartContext);
  const cartCount = [...cart];

  return (
    <>
      <>{JSON.stringify(cartCount)}</>

      <div className="count-container">
        <div className="count">
          <button className="btn-less">
            <b>-</b>
          </button>
          <span>
            <b>{}</b>
          </span>
          <button className="btn-add">
            <b>+</b>
          </button>
        </div>
      </div>
    </>
  );
}
