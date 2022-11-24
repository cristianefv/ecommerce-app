import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const { idcategory } = useParams();

  const [vinoteca, setVinoteca] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();
    let products;

    if (idcategory) {
      products = query(collection(dataBase, 'products'), where('estilo', '==', idcategory));
    } else {
      products = collection(dataBase, 'products');
    }

    getDocs(products).then((res) => {
      const arrayProducts = res.docs.map((element) => {
        return {
          id: element.id,
          nombre: element.data().nombre,
          bodega: element.data().bodega,
          estilo: element.data().estilo,
          cepa: element.data().cepa,
          aniada: element.data().aniada,
          precio: element.data().precio,
          imagen: element.data().url,
          stock: element.data().stock,
        };
      });
      console.log(arrayProducts);

      setVinoteca(arrayProducts);
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
