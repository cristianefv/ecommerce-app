import React from 'react';
import '../styles/Footer.css';
import iconInstagram from '../images/iconos/instagram.svg';

export default function Footer() {
  const toInstagram = () => {
    window.open('https://www.instagram.com/perfildelvino/');
  };
  return (
    <>
      <footer>
        <div>
          <img src={iconInstagram} alt={'Logo de instagram'} onClick={toInstagram} />
        </div>
        <p className="footer_txt">Copyright &copy; 2022 "Perfil del Vino". Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
