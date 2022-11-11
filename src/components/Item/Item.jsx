import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../Item/Item.css';

export default function Item({ item }) {
  const nombre = useContext(CartContext);
  console.log(`Item: ${nombre}`);
  return (
    <div key={item.id}>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <CardMedia component="img" height="250" src={item.imagen} alt="vino en venta" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Bodega: ${item.bodega}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Cepa: ${item.cepa}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Añada: ${item.aniada}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`Precio: $${item.precio}`}
          </Typography>
        </CardContent>
        <Button style={{ backgroundColor: 'black' }}>
          <Link style={{ color: 'white' }} to={`/vino-seleccionado/${item.id}`}>
            VER DETALLE
          </Link>
        </Button>
      </Card>
    </div>
    //! HACER RETURN QUE ME LLEVE AL ID (DETAIL)
  );
}
