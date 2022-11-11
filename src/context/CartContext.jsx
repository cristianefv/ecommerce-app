import React, { children } from 'react';

export const CartContext = React.createContext([]);

export default function CartProvider({ children }) {
  return <CartContext.Provider value={'Cristian'}>{children}</CartContext.Provider>;
}
