import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';

import ItemList from '../ItemList/ItemList';

import { getProducts } from '../../data/productos.js';

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      res(getProducts());
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <ItemList data={data} />
    </>
  );
}
