import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';
import { cartContext } from '../context/CartContextComponent';
import ItemCount from './ItemCount';

export default function ItemDetail({ item }) {
  const { addItem } = useContext(cartContext);
  const onAdd = (quantity) => {
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
          <div className="itemContainer">
            <Card sx={{ width: '80vw' }}>
              <h1 className="title-detail">{item.nombre.toUpperCase()}</h1>

              <CardMedia component="img" height="450" sx={{ margin: 'auto', width: 300 }} image={item.url} alt="vino elegido" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {`Bodega: ${item.bodega}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Categoria del vino: ${item.estilo}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Cepa utilizada: ${item.cepa}`}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {`Precio: $${item.precio}`}
                </Typography>
                <Typography>
                  <b>Stock: </b>
                  {renderStock} unidades
                </Typography>

                <Typography>
                  <b>Descripción:</b> {item.descripcion}
                </Typography>
                <ItemCount renderizarStock={renderizarStock} initial={1} item={item} onAdd={onAdd} />
              </CardContent>
            </Card>
            ;
          </div>
        </>
      ) : (
        <>
          <div className="watchContainer">
            <Watch height="250" width="250" radius="48" color="red" ariaLabel="watch-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          </div>
        </>
      )}
    </div>
  );
}
