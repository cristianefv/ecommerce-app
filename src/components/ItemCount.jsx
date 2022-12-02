import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import '../styles/ItemCount.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextComponent';

export default function ItemCount({ initial, renderizarStock, item, onAdd }) {
  const [count, setCount] = useState(initial);
  const { cart } = useContext(cartContext);
  const [nuevoStock, setNuevoStock] = useState(item.stock);
  const [seAgrego, setSeAgrego] = useState(false);

  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  useEffect(() => {
    setNuevoStock(nuevoStock);
  }, [nuevoStock]);

  const decrease = () => {
    if (count) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    if (count) {
      setCount(count + 1);
    }
  };

  return (
    <div className="count-container">
      <div className="count">
        <button className="btn-less" onClick={decrease} disabled={count <= 1}>
          <b>-</b>
        </button>
        <span>
          <b>{count}</b>
        </span>
        <button className="btn-add" onClick={increase} disabled={count >= item.stock}>
          <b>+</b>
        </button>
      </div>
      <div className="btn-cart-container">
        {seAgrego ? (
          <>
            <div className="options-btn">
              <Button style={{ marginRight: 30, backgroundColor: 'purple', color: 'purple' }}>
                <Link style={{ color: 'white', textDecorationStyle: 'none' }} to="/cart">
                  IR AL CARRITO
                </Link>
              </Button>

              <Button style={{ marginLeft: 30, backgroundColor: 'green', color: 'green' }}>
                <Link style={{ color: 'white', textDecorationStyle: 'none' }} to="/">
                  SEGUIR COMPRANDO
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <Button
            className="btn-onAdd"
            onClick={() => {
              onAdd(count);
              renderizarStock(nuevoStock);
              setSeAgrego(true);
            }}
            disabled={nuevoStock < 1}
            color="success"
            variant="contained"
            size="small"
          >
            Agregar al carrito
          </Button>
        )}
        {cart.length ? (
          <div className="cartWidget-ctn">
            <CartWidget cant={cant} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
