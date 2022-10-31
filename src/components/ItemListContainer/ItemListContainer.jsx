import React from 'react';
import '../../../src/components/ItemListContainer/ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer() {
  const onAdd = (quantity) => {
    //! quantity llega hasta aca desde el valor count en ItemCount
    console.log(`Agregaste ${quantity} unidades`);
  };
  return (
    <>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}
