import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { cartContext } from '../context/CartContextComponent';

export default function Cart() {
  const { cart, removeItem, clearCart } = React.useContext(cartContext);
  const cartDetail = [...cart];

  React.useEffect(() => {
    console.log(cart);
  }, [cart]);

  function subtotalPrice() {
    const total = cartDetail.map((item) => item.precio * item.quantity);
    return total.reduce((acumulado, suma) => acumulado + suma, 0);
  }

  const handleDelete = () => {};

  return (
    <>
      <h1>PRODUCTOS SELECCIONADOS</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Etiqueta</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Añada</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio unitario</TableCell>
              <TableCell align="right">Importe</TableCell>
              <TableCell align="right">Eliminar producto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartDetail.map((item) => (
              <TableRow align="right" key={item.nombre}>
                <TableCell>
                  <img src={`${item.url}`} alt={item.nombre} />
                </TableCell>
                <TableCell align="right">{item.nombre}</TableCell>
                <TableCell align="right">{item.aniada}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{`$${item.precio}`}</TableCell>
                <TableCell align="right">{`$${item.precio * item.quantity}`}</TableCell>
                <TableCell align="right">
                  <Chip label="Eliminar" onClick={() => removeItem(item.id)} onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal a abonar</TableCell>
              <TableCell align="right">{cartDetail.length ? <>${subtotalPrice()}</> : <>$0</>}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button onClick={() => clearCart()}>VACIAR CARRITO</Button>
    </>
  );
}
