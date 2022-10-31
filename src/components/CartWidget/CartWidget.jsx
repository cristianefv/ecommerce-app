import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import '../../../src/components/CartWidget/CartWidget.css';

const seeCart = () => {
  console.log('viendo carrito');
};

export default function CartWidget() {
  return (
    <>
      <IconButton size="large" aria-label="show 0 new items" color="inherit">
        <Badge badgeContent={0} color="error">
          <ShoppingCartIcon onClick={seeCart} />
        </Badge>
      </IconButton>
    </>
  );
}
