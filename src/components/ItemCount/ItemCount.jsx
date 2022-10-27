import React from 'react';

export default function ItemCount() {
  return (
    <>
      <div className="count">
        <button className="btn-less">-</button>
        <span>0</span>
        <button className="btn-add">+</button>
      </div>
      <button className="btn-addToCart">Agregar al carrito</button>
    </>
  );
}
