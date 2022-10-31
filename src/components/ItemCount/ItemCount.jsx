import React, { useState, useEffect } from 'react';
import '../../../src/components/ItemCount/ItemCount.css';

export default function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));
  const [nuevoStock, setNuevoStock] = useState(stock);

  const decrease = () => setCount(count - 1);

  const increase = () => setCount(count + 1);
  //! useEffect es para evitar que se re-renderice esta linea de codigo

  useEffect(() => {
    setNuevoStock(stock);
    console.log(`el stock es: ${stock}`);
  }, [stock]);
  useEffect(() => {
    setCount(parseInt(initial));
    console.log(`el valor de inicial es: ${initial}`);
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
        <button className="btn-addToCart" disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
    //! onAdd(count) le manda el dato a quantity en ItemListContainer porque esta declarada ahi
  );
}
