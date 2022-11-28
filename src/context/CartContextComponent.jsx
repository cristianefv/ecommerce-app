import React, { useState } from 'react';
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

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    console.log(`Quiere elminar este producto`);
  };

  const clearCart = () => {
    setCart([]);
  };

  return <cartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>{children}</cartContext.Provider>;
}
