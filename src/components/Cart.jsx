import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextComponent';

export default function Cart() {
  const { cart, removeItem, clearCart } = React.useContext(cartContext);
  const cartAux = [...cart];
  React.useEffect(() => {
    console.log(cart);
  }, [cart]);
  function subtotalPrice() {
    const total = cartAux.map((item) => item.precio * item.quantity);
    return total.reduce((acumulado, suma) => acumulado + suma, 0);
  }
  const handleDelete = () => {};
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <>
      {cart.length ? (
        <>
          <h1>PRODUCTOS SELECCIONADOS</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Etiqueta</StyledTableCell>
                  <StyledTableCell align="right">Nombre</StyledTableCell>
                  <StyledTableCell align="right">Añada</StyledTableCell>
                  <StyledTableCell align="right">Cantidad</StyledTableCell>
                  <StyledTableCell align="right">Precio unitario</StyledTableCell>
                  <StyledTableCell align="right">Importe</StyledTableCell>
                  <StyledTableCell align="right">Eliminar producto</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartAux.map((item) => (
                  <StyledTableRow key={item.nombre}>
                    <StyledTableCell component="th" scope="row">
                      <img src={`${item.url}`} alt={item.nombre} />
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.nombre}</StyledTableCell>
                    <StyledTableCell align="right">{item.aniada}</StyledTableCell>
                    <StyledTableCell align="right">{`${item.quantity} unidades`}</StyledTableCell>
                    <StyledTableCell align="right">{`$${item.precio}`}</StyledTableCell>
                    <StyledTableCell align="right">{`$${item.precio * item.quantity}`}</StyledTableCell>
                    <StyledTableCell align="ri`ght">
                      <Chip label="Eliminar" onClick={() => removeItem(item.id)} onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={3}>Subtotal a abonar</TableCell>
                  <TableCell align="right">{cartAux.length ? <>${subtotalPrice()}</> : <>$0</>}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <>{cartAux.length ? <Button onClick={() => clearCart()}>VACIAR CARRITO</Button> : ''}</>
          <>
            {cartAux.length ? (
              <Button>
                <Link to="/checkout">Ir a pagar </Link>
              </Button>
            ) : (
              ''
            )}
          </>
        </>
      ) : (
        <>
          <h2>NO AGREGASTE PRODUCTOS AL CARRITO</h2>
          <h3>
            Mira nuestro catalogo de vinos haciendo <Link to="/">click aqui</Link>
          </h3>
        </>
      )}
    </>
  );
}
