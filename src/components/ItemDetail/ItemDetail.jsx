import { LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({ vinoSeleccionado }) {
  const onAdd = (quantity) => {
    //! quantity llega hasta aca desde el valor count en ItemCount
    console.log(`Agregaste ${quantity} unidades`);
  };

  const [renderStock, setRenderStock] = useState(vinoSeleccionado.stock);

  useEffect(() => {
    setRenderStock(vinoSeleccionado.stock);
  }, [vinoSeleccionado]);

  const renderizarStock = (stockActualizado) => {
    setRenderStock(stockActualizado);
  };

  return (
    <div>
      {vinoSeleccionado.id ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={vinoSeleccionado.nombre} subheader={`Categoria del vino: ${vinoSeleccionado.estilo}`} />
            <CardMedia component="img" height="450" image={vinoSeleccionado.imagen} alt="vino elegido" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {`Bodega: ${vinoSeleccionado.bodega}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Cepa utilizada: ${vinoSeleccionado.cepa}`}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {`Precio: $${vinoSeleccionado.precio}`}
              </Typography>
              <Typography>{`Stock actual: ${renderStock} unidades `}</Typography>

              <ItemCount renderizarStock={renderizarStock} initial={1} stock={vinoSeleccionado.stock} onAdd={onAdd} />
            </CardContent>
          </Card>
          ;
        </>
      ) : (
        <>
          <Stack sx={{ width: '100%', color: 'red' }} spacing={2}>
            <LinearProgress color="inherit" />
          </Stack>
        </>
      )}
    </div>
  );
}
