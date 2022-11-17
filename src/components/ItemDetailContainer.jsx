import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/productos';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [vinoSeleccionado, setVinoSeleccionado] = useState({});

  useEffect(() => {
    const getWine = new Promise((res, rej) => {
      res(getProducts()); //!Trae el array de productos a los 2 segundos
    });
    getWine.then((res) => {
      setVinoSeleccionado(res.find((item) => item.id === iditem));
    });
  }, [iditem]);

  return (
    <>
      <ItemDetail item={vinoSeleccionado} />
    </>
  );
}
