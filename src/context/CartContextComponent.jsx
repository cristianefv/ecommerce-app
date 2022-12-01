import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import swal from 'sweetalert';

export const cartContext = createContext();

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(`cart`)) || []);
  const [totalToPay, setTotalToPay] = useState(0);
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [orderCreated, setOrderCreated] = React.useState('');

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
  let validateEmail = (email) => {
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailReg.test(email) === false) {
      swal({
        title: 'El mail ingresado no es valido',
        text: 'Necesitamos su correo para poder mandarle la informacion del pedido',
        icon: 'warning',
        dangerMode: false,
      });

      return false;
    }
    return true;
  };
  const handleClickBuyButton = () => {
    const order = { user: { nombre: name, apellido: surname, email: email, telefono: tel, direccion: adress, codigoPostal: postalCode }, carrito: cart, total: totalToPay };

    const dataBase = getFirestore();

    const orders = collection(dataBase, 'orders');

    if (name === `` || surname === `` || email === `` || tel === `` || adress === `` || postalCode === ``) {
      swal({
        title: 'Faltan ingresar datos!',
        text: 'Complete todos los campos para poder generar el pedido!',
        icon: 'warning',
        dangerMode: false,
      });
      return;
    }
    if (validateEmail(email) === false) {
      return;
    }

    addDoc(orders, order).then((orderCreated) => {
      setOrderCreated(orderCreated.id);
    });

    setTimeout(() => {
      clearCart();
    });
  };
  const defaultUserData = () => {
    setName('');
    setSurname('');
    setEmail('');
    setTel('');
    setAdress('');
    setPostalCode('');
    setOrderCreated('');
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalToPay,
        name,
        surname,
        email,
        tel,
        adress,
        postalCode,
        setName,
        setSurname,
        setEmail,
        setTel,
        setAdress,
        setPostalCode,
        handleClickBuyButton,
        validateEmail,
        orderCreated,
        setOrderCreated,
        defaultUserData,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
