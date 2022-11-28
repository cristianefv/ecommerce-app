import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { cartContext } from '../context/CartContextComponent';

export default function Checkout() {
  const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  const { cart } = React.useContext(cartContext);
  const cartDetail = [...cart];
  React.useEffect(() => {
    console.log(cart);
  }, [cart]);
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function subtotalPrice(quantity, precio) {
    return quantity * precio;
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Detalle de pedido</Typography>
        </AccordionSummary>
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
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">PONER PRECIO SUBTOTAL</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Accordion>
    </>
  );
}
