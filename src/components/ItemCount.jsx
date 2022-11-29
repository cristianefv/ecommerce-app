import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import '../styles/ItemCount.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextComponent';

export default function ItemCount({ initial, renderizarStock, item, onAdd }) {
  const [count, setCount] = useState(initial);
  const { cart, addToCart } = useContext(cartContext);
  const [nuevoStock, setNuevoStock] = useState(item.stock);
  const [seAgrego, setSeAgrego] = useState(false);

  const [cant, setCant] = React.useState(0);
  React.useEffect(() => {
    setCant(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);
  // const onAdd = (quantity) => {
  //   // //! quantity llega hasta aca desde el valor count en ItemCount
  //   // console.log(`Agregaste ${quantity} unidades de ${item.nombre}`);
  //   addToCart(item, count);
  //   console.log(`elegiste ${quantity} unidad/es`);
  // };

  // useEffect(() => {
  //   setCount(initial);
  //   console.log(`se puede empezar a elegir ${initial} cantidad`);
  // }, [initial]);

  // useEffect(() => {
  //   console.log('count esta en: ', count);
  // }, [count]);

  useEffect(() => {
    console.log('el stock es: ', nuevoStock);
  }, [nuevoStock]);

  const decrease = () => {
    if (count) {
      setCount(count - 1);
      // console.log(`resto 1`);
    }
  };
  const increase = () => {
    if (count) {
      setCount(count + 1);
      // console.log(`sumo 1 a count`);
    }
  };
  // useEffect(() => {
  //   // setNuevoStock(nuevoStock - count);
  //   console.log(`el stock inicial es: ${nuevoStock}`);
  // }, []);
  if (item.stock <= 0) {
    <>`LO SIENTO`</>;
  }
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
          <Link to={'/cart'}>IR AL CARRITO</Link>
        ) : (
          <Button
            className="btn-onAdd"
            onClick={() => {
              onAdd(count);
              renderizarStock(nuevoStock);
              // setSeAgrego(true);
            }}
            disabled={nuevoStock < 1}
            color="success"
            variant="contained"
            size="small"
          >
            Agregar al carrito
          </Button>
        )}
        {cart.length ? <CartWidget cant={cant} /> : ''}
      </div>
    </div>
    //! onAdd(count) le manda el dato a (quantity) en ItemDetail porque esta declarada ahi
  );
}
