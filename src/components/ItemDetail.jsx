import { LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../context/CartContextComponent';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  const { addItem } = useContext(cartContext);

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);
  const onAdd = (quantity) => {
    //! quantity llega hasta aca desde el valor count en ItemCount
    addItem(item, quantity);
  };

  const [renderStock, setRenderStock] = useState(item.stock);

  useEffect(() => {
    setRenderStock(item.stock);
  }, [item]);

  const renderizarStock = (updateStock) => {
    setRenderStock(updateStock);
  };

  return (
    <div>
      {item.id ? (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={item.nombre} subheader={`Categoria del vino: ${item.estilo}`} />
            <CardMedia component="img" height="450" image={item.url} alt="vino elegido" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {`Bodega: ${item.bodega}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Cepa utilizada: ${item.cepa}`}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {`Precio: $${item.precio}`}
              </Typography>
              <Typography>{`Stock actual: ${renderStock} unidades `}</Typography>

              <ItemCount renderizarStock={renderizarStock} initial={1} item={item} onAdd={onAdd} />
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
