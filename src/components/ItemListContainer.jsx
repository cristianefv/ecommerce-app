import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
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
          descripcion: element.data().descripcion,
          precio: element.data().precio,
          imagen: element.data().url,
          stock: element.data().stock,
        };
      });

      setVinoteca(arrayProducts);
    });
  }, [idcategory]);

  return (
    <>
      {!vinoteca.length && (
        <div className="watchContainer">
          <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
        </div>
      )}
      <ItemList vinoteca={vinoteca} />
    </>
  );
}
