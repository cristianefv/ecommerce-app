import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import '../../../src/components/ItemCount/ItemCount.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export default function ItemCount({ initial, stock, onAdd, renderizarStock }) {
  const [count, setCount] = useState(parseInt(initial));
  const [nuevoStock, setNuevoStock] = useState(parseInt(stock));
  const [seAgrego, setSeAgrego] = useState(false);

  const decrease = () => {
    setCount(count - 1);
    setNuevoStock(nuevoStock + 1);
  };

  const increase = () => {
    setCount(count + 1);
    setNuevoStock(nuevoStock - 1);
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
      <div className="btn-cart-container">
        {seAgrego ? (
          <Link to={'/cart'}>IR AL CARRITO</Link>
        ) : (
          <Button
            className="btn-onAdd"
            onClick={() => {
              onAdd(count);
              renderizarStock(nuevoStock);
              setSeAgrego(true);
            }}
            disabled={nuevoStock < 0}
            color="success"
            variant="contained"
            size="small"
          >
            Agregar al carrito
          </Button>
        )}

        {/* <Button
          className="btn-onAdd"
          onClick={() => {
            onAdd(count);

            prueba(nuevoStock);
          }}
          disabled={nuevoStock < 0}
          color="success"
          variant="contained"
          size="small"
        >
          Agregar al carrito
        </Button> */}

        <CartWidget />
      </div>
    </div>
    //! onAdd(count) le manda el dato a (quantity) en ItemDetail porque esta declarada ahi
  );
}
