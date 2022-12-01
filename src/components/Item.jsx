import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Item.css';

export default function Item({ item }) {
  return (
    <div key={item.id}>
      <Card className="card" sx={{ maxWidth: 250 }}>
        <img className="img-card" component="img" height="250" src={item.imagen} alt={`${item.nombre} ${item.bodega}`} />
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
        <div className="viewDetail-ctn">
          <Button style={{ backgroundColor: 'black' }}>
            <Link style={{ color: 'white' }} to={`/vino-seleccionado/${item.id}`}>
              VER DETALLE
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
