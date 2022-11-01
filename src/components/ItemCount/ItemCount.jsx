import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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
            <b>-</b>
          </button>
          <span>
            <b>{count}</b>
          </span>
          <button className="btn-add" disabled={count >= stock} onClick={increase}>
            <b>+</b>
          </button>
        </div>
        <Button
          className="btn-onAdd"
          onClick={() => {
            onAdd(count);
            updateStock();
          }}
          disabled={nuevoStock <= -1}
          color="success"
          variant="contained"
          size="small"
        >
          Agregar al carrito
        </Button>
      </div>
    </>
    //! onAdd(count) le manda el dato a quantity en ItemListContainer porque esta declarada ahi
  );
}
