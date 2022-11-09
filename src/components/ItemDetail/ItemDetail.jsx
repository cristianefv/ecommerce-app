import { LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({ vinoSeleccionado }) {
  const onAdd = (quantity) => {
    //! quantity llega hasta aca desde el valor count en ItemCount
    console.log(`Agregaste ${quantity} unidades`);
  };
  return (
    <div>
      {vinoSeleccionado.id ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={vinoSeleccionado.nombre} subheader={`Categoria del vino: ${vinoSeleccionado.estilo}`} />
            <CardMedia component="img" height="450" image={vinoSeleccionado.imagen} alt="Paella dish" />
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
              <ItemCount initial={1} stock={vinoSeleccionado.stock} onAdd={onAdd} />
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
