import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    const position = cart.findIndex((item) => item.id === id);
    return position;
  };

  const addItem = (item, quantity) => {
    const position = isInCart(item.id);
    if (position === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const cartAux = [...cart];
      cartAux[position] = { ...cartAux[position], quantity: cartAux[position].quantity + quantity };
      setCart(cartAux);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return <cartContext.Provider value={{ cart, addItem, x: 10 }}>{children}</cartContext.Provider>;
}
