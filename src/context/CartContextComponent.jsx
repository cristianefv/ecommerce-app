import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`cart`)) || []);
  const [totalToPay, setTotalToPay] = useState(0);

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
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const total = cart.reduce((acumulado, item) => acumulado + item.quantity * item.precio, 0);
    setTotalToPay(total);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  });

  return <cartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalToPay }}>{children}</cartContext.Provider>;
}
