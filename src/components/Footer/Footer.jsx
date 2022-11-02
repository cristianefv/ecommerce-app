import React from 'react';
import '../../../src/components/Footer/Footer.css';
import iconInstagram from '../../images/iconos/instagram.svg';

const toInstagram = () => {
  window.open('https://www.instagram.com/perfildelvino/');
};
export default function Footer() {
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
