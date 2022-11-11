import AchavalFerrerMerlot from '../images/etiquetas_tienda/achavalferrer_merlot.jpg';
import VerSacrum from '../images/etiquetas_tienda/versacrum_garnacha.jpg';
import BenMarcoCf from '../images/etiquetas_tienda/benmarco_cabernetfranc.jpg';
import TintoCasa from '../images/etiquetas_tienda/tintodelacasa_riccitelli.jpg';
import PielNegra from '../images/etiquetas_tienda/bressia_pielnegra.jpg';
import Altimus from '../images/etiquetas_tienda/altimus_elesteco.jpg';
import Puramun from '../images/etiquetas_tienda/puramun_chardonnay.jpg';
import Colome from '../images/etiquetas_tienda/colome_torrontes.jpg';
import Mendel from '../images/etiquetas_tienda/mendel_semillon.jpg';
import Zaha from '../images/etiquetas_tienda/zaha_marsanne.jpg';
import LindaFlor from '../images/etiquetas_tienda/lindaflor_chardonnay.jpg';
import Jijiji from '../images/etiquetas_tienda/jijiji_cheninblanc.jpg';
import Signature from '../images/etiquetas_tienda/susanaBalbo_signature.jpg';
import Flora from '../images/etiquetas_tienda/flora_zaha.jpg';
import Padma from '../images/etiquetas_tienda/padma_corazonDelSol.jpg';
import Nacha from '../images/etiquetas_tienda/nacha_chacra.jpg';
import CasaPetriniRose from '../images/etiquetas_tienda/casaPetrini_rose.jpg';
import PerdicesRose from '../images/etiquetas_tienda/lasPerdices_rose.jpg';

export const winery = [
  {
    id: `ben-marco-cabernet-franc`,
    nombre: 'Ben Marco',
    bodega: 'Susana Balbo',
    estilo: 'tintos',
    cepa: 'Cabernet Franc',
    aniada: 2017,
    precio: 2680,
    imagen: BenMarcoCf,
    stock: 24,
  },
  {
    id: 'achaval-merlot',
    nombre: 'Achaval Ferrer',
    bodega: 'Achaval Ferrer',
    estilo: 'tintos',
    cepa: 'Merlot',
    aniada: 2020,
    precio: 2850,
    imagen: AchavalFerrerMerlot,
    stock: 16,
  },
  { id: 'versacrum-garnacha', nombre: 'Ver Sacrum', bodega: 'Ver Sacrum', estilo: 'tintos', cepa: 'Garnacha', aniada: 2020, precio: 3000, imagen: VerSacrum, stock: 12 },
  {
    id: 'tinto-de-la-casa-malbec',
    nombre: 'Tinto de la Casa',
    bodega: 'Riccitelli Wines',
    estilo: 'tintos',
    cepa: 'Malbec',
    aniada: 2020,
    precio: 5200,
    imagen: TintoCasa,
    stock: 15,
  },
  { id: 'piel-negra-pinot-noir', nombre: 'Piel Negra', bodega: 'Bressia', estilo: 'tintos', cepa: 'Pinot Noir', aniada: 2018, precio: 7500, imagen: PielNegra, stock: 10 },
  { id: 'altimus-blend', nombre: 'Altimus', bodega: 'El Esteco', estilo: 'tintos', cepa: 'Blend', aniada: 2017, precio: 9950, imagen: Altimus, stock: 15 },
  { id: 'puramun-chardonnay', nombre: 'Puramun', bodega: 'Pepe Galante', estilo: 'blancos', cepa: 'Chardonnay', aniada: 2019, precio: 1446, imagen: Puramun, stock: 17 },
  { id: 'colome-torrontes', nombre: 'Colome', bodega: 'Colome Wines', estilo: 'blancos', cepa: 'Torrontes', aniada: 2020, precio: 1750, imagen: Colome, stock: 9 },
  { id: 'mendel-semillon', nombre: 'Mendel', bodega: 'Bodega Mendel', estilo: 'blancos', cepa: 'Semillon', aniada: 2020, precio: 2299, imagen: Mendel, stock: 6 },
  { id: 'zaha-marsanne', nombre: 'Zaha', bodega: 'Teho Wines', estilo: 'blancos', cepa: 'Marsanne', aniada: 2019, precio: 2875, imagen: Zaha, stock: 12 },
  {
    id: 'linda-flor-chardonnay',
    nombre: 'Linda Flor',
    bodega: 'Monteviejo',
    estilo: 'blancos',
    cepa: 'Chardonnay',
    aniada: 2019,
    precio: 4300,
    imagen: LindaFlor,
    stock: 20,
  },
  {
    id: 'jijiji-chenin-blanc',
    nombre: 'Ji Ji Ji',
    bodega: 'Gen del Alma',
    estilo: 'blancos',
    cepa: 'Chenin Blanc',
    aniada: 2020,
    precio: 1275,
    imagen: Jijiji,
    stock: 18,
  },
  {
    id: 'susana-balbo-signature-rosado',
    nombre: 'Signature',
    bodega: 'Susana Balbo',
    estilo: 'rosados',
    cepa: 'Pinot Noir - Malbec',
    aniada: 2021,
    precio: 5200,
    imagen: Signature,
    stock: 7,
  },
  { id: 'flora-pinot-noir', nombre: 'Flora', bodega: 'Teho Wines', estilo: 'rosados', cepa: 'Pinot Noir', aniada: 2019, precio: 3300, imagen: Flora, stock: 9 },
  { id: 'corazon-del-sol-garnacha', nombre: 'Padma', bodega: 'Corazon del Sol', estilo: 'rosados', cepa: 'Garnacha', aniada: 2021, precio: 6000, imagen: Padma, stock: 11 },
  { id: 'las-perdices-rose', nombre: 'Rosé', bodega: 'Las Perdices', estilo: 'rosados', cepa: 'Malbec', aniada: 2021, precio: 2700, imagen: PerdicesRose, stock: 20 },
  { id: 'nacha-pinot-noir', nombre: 'Nacha', bodega: 'Chacra', estilo: 'rosados', cepa: 'Pinot Noir', aniada: 2021, precio: 6490, imagen: Nacha, stock: 24 },
  {
    id: 'casa-petrini-rose',
    nombre: 'Casa Petrini Rosé',
    bodega: 'Casa Petrini',
    estilo: 'rosados',
    cepa: 'Malbec - Tannat',
    aniada: 2021,
    precio: 1550,
    imagen: CasaPetriniRose,
    stock: 17,
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(winery);
    }, 2000);
  });
};
