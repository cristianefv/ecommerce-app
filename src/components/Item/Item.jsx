import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../../../src/components/Item/Item.css';

export default function Item({ info }) {
  return (
    <>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="250" src={info.imagen} alt="vino en venta" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Bodega: ${info.bodega}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Cepa: ${info.cepa}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Añada: ${info.aniada}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`Precio: $${info.precio}`}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
