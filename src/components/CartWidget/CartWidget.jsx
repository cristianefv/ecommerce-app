import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React from 'react';
import { Link } from 'react-router-dom';
import '../CartWidget/CartWidget.css';

//! PASAR POR PROP LA CANTIDAD DE ITEMS EN CART PARA AGREGARLA A "badgeContent"
export default function CartWidget() {
  const seeCart = () => {
    console.log('viendo carrito');
  };

  return (
    <>
      <Link to="/cart" size="large" aria-label="show 0 new items" color="white">
        <Badge badgeContent={2} color="error">
          <ShoppingCartIcon onClick={seeCart} />
        </Badge>
      </Link>
    </>
  );
}
