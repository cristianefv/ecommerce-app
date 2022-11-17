import React, { useState } from 'react';
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, count) => {
    const cartAux = [...cart];

    let itemAgregado = false;
    for (let i = 0; i < cartAux.length; i++) {
      if (cartAux[i].id === item.id) {
        cartAux[i].count += count;
        itemAgregado = true;
      }
    }

    if (!itemAgregado) {
      cartAux.push({ ...item, count });
    }

    setCart(cartAux);
  };

  return <cartContext.Provider value={{ cart, addToCart }}>{children}</cartContext.Provider>;
}
