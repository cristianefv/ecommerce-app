import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { cartContext } from '../context/CartContextComponent';

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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CartDetail() {
  const { cart } = React.useContext(cartContext);
  const cartDetail = [...cart];

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function totalPrice() {
    const total = cartDetail.map((item) => item.precio * item.quantity);
    return total.reduce((acumulado, suma) => acumulado + suma, 0);
  }
  return (
    <>
      <div className="accordionContainer">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <b>Detalle del pedido</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {cartDetail.map((item) => (
              <div className="itemContainer" key={item.nombre}>
                <img className="imgItem" src={`${item.url}`} alt={item.nombre} />
                <div className="productDetail">
                  <ul>
                    <li className="detail">
                      <b>
                        <u>Nombre:</u>
                      </b>
                      {` ${item.nombre}`}
                    </li>
                    <li className="detail">
                      <b>
                        <u>Añada:</u>
                      </b>
                      {` ${item.aniada}`}
                    </li>
                    <li className="detail">
                      <b>
                        <u>Variedad:</u>
                      </b>
                      {` ${item.cepa}`}
                    </li>
                    <li className="detail">
                      <b>
                        <u>Importe:</u>
                      </b>
                      {` $${item.precio * item.quantity} (${item.quantity} unidades)`}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <Typography className="totalPrice">
            <b>TOTAL:</b> {cartDetail.length ? <b>${totalPrice()}</b> : <b>$0</b>}
          </Typography>
        </Accordion>
      </div>
    </>
  );
}
