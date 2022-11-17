import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/productos.js';
import ItemList from './ItemList';
import '../styles/ItemListContainer.css';

export default function ItemListContainer() {
  const { idcategory } = useParams();

  const [vinoteca, setVinoteca] = useState([]);

  useEffect(() => {
    const getWinery = new Promise((res, rej) => {
      res(getProducts());
    });
    getWinery.then((res) => {
      if (idcategory) {
        setVinoteca(res.filter((item) => item.estilo === idcategory));
      } else {
        setVinoteca(res);
      }
    });
  }, [idcategory]);

  return (
    <>
      {!vinoteca.length && (
        <Stack sx={{ width: '100%', color: 'red' }} spacing={2}>
          <LinearProgress color="inherit" />
        </Stack>
      )}
      <ItemList vinoteca={vinoteca} />
    </>
  );
}
