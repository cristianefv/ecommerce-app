import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Logo from '../images/iconos/logo.svg';
import '../styles/Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = [
    {
      id: 1,
      html: (
        <Link to="/">
          <img className="btnIndex" src={Logo} alt={'logoApp'} style={{ width: 120, height: 120 }} />
        </Link>
      ),
    },
    {
      id: 2,
      html: (
        <Link to="/estilo/tintos" style={{ color: 'white', textDecoration: 'none', height: 60 }}>
          vinos tintos
        </Link>
      ),
    },
    {
      id: 3,
      html: (
        <Link to="/estilo/blancos" style={{ color: 'white', textDecoration: 'none' }}>
          vinos blancos
        </Link>
      ),
    },
    {
      id: 4,
      html: (
        <Link to="/estilo/rosados" style={{ color: 'white', textDecoration: 'none' }}>
          vinos rosados
        </Link>
      ),
    },

    {
      id: 5,
      html: (
        <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>
          checkout
        </Link>
      ),
    },

    {
      id: 6,
      html: (
        <Link to="/contacto" style={{ color: 'white', textDecoration: 'none' }}>
          contacto
        </Link>
      ),
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ background: '#000000' }} className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.html}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.id} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.html}
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
