import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
export default function CartWidget({ cant }) {
  return (
    <>
      <Link to="/cart" size="large" aria-label="show 0 new items" color="white">
        <Badge badgeContent={cant} color="error">
          <ThemeProvider theme={theme}>
            <ShoppingCartIcon color="neutral" variant="contained" />
          </ThemeProvider>
        </Badge>
      </Link>
    </>
  );
}
