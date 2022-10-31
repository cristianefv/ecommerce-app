import React, { useState, useEffect } from 'react';
import '../../../src/components/ItemCount/ItemCount.css';

export default function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));
  const [nuevoStock, setNuevoStock] = useState(parseInt(stock));

  const decrease = () => {
    setCount(count - 1);
    setNuevoStock(nuevoStock + 1);
  };

  const increase = () => {
    setCount(count + 1);
    setNuevoStock(nuevoStock - 1);
  };

  const updateStock = () => {
    // setCount(nuevoStock - count);
    setNuevoStock(nuevoStock - count);
    console.log(`el stock ahora es ${parseInt(nuevoStock)}`);
  };

  useEffect(() => {
    setNuevoStock(nuevoStock - count);
    console.log(`el stock inicial es: ${parseInt(nuevoStock)}`);
  }, []);
  useEffect(() => {
    setCount(parseInt(initial));
    console.log(`se puede empezar a elegir ${initial} cantidad`);
  }, [initial]);
  return (
    <>
      <div className="count-container">
        <div className="count">
          <button className="btn-less" disabled={count <= 1} onClick={decrease}>
            -
          </button>
          <span>{count}</span>
          <button className="btn-add" disabled={count >= stock} onClick={increase}>
            +
          </button>
        </div>
        <button
          className="btn-addToCart"
          disabled={nuevoStock <= -1}
          onClick={() => {
            onAdd(count);
            updateStock();
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
    //! onAdd(count) le manda el dato a quantity en ItemListContainer porque esta declarada ahi
  );
}
