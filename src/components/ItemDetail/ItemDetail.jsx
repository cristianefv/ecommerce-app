import React from 'react';

export default function ItemDetail({ vinoSeleccionado }) {
  return <div>{vinoSeleccionado.id ? <>{vinoSeleccionado.nombre}</> : <>Loading...</>}</div>;
}
