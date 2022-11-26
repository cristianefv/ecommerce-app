import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartWidget.css';

//! PASAR POR PROP LA CANTIDAD DE ITEMS EN CART PARA AGREGARLA A "badgeContent"
export default function CartWidget({ cant }) {
  return (
    <>
      <Link to="/cart" size="large" aria-label="show 0 new items" color="white">
        <Badge badgeContent={cant} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </>
  );
}
