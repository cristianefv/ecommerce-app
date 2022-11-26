import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [vinoSeleccionado, setVinoSeleccionado] = useState({});

  useEffect(() => {
    const dataBase = getFirestore();

    let documento = doc(dataBase, 'products', iditem);

    getDoc(documento).then((item) => {
      setVinoSeleccionado({ id: item.id, ...item.data() });
    });
  }, [iditem]);

  return (
    <>
      <ItemDetail item={vinoSeleccionado} />
    </>
  );
}
