import React, { useState, useEffect } from 'react';
import '../../../src/components/ItemListContainer/ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import AchavalFerrerMerlot from '../../../src/assets/images/etiquetas_tienda/achavalferrer_merlot.jpg';
import VerSacrum from '../../../src/assets/images/etiquetas_tienda/versacrum_garnacha.jpg';
import BenMarcoCf from '../../../src/assets/images/etiquetas_tienda/benmarco_cabernetfranc.jpg';
import TintoCasa from '../../../src/assets/images/etiquetas_tienda/tintodelacasa_riccitelli.jpg';
import PielNegra from '../../../src/assets/images/etiquetas_tienda/bressia_pielnegra.jpg';
import Altimus from '../../../src/assets/images/etiquetas_tienda/altimus_elesteco.jpg';
import Puramun from '../../../src/assets/images/etiquetas_tienda/puramun_chardonnay.jpg';
import Colome from '../../../src/assets/images/etiquetas_tienda/colome_torrontes.jpg';
import Mendel from '../../../src/assets/images/etiquetas_tienda/mendel_semillon.jpg';
import Zaha from '../../../src/assets/images/etiquetas_tienda/zaha_marsanne.jpg';
import LindaFlor from '../../../src/assets/images/etiquetas_tienda/lindaflor_chardonnay.jpg';
import Jijiji from '../../../src/assets/images/etiquetas_tienda/jijiji_cheninblanc.jpg';
import Signature from '../../../src/assets/images/etiquetas_tienda/susanaBalbo_signature.jpg';
import Flora from '../../../src/assets/images/etiquetas_tienda/flora_zaha.jpg';
import Padma from '../../../src/assets/images/etiquetas_tienda/padma_corazonDelSol.jpg';
import Nacha from '../../../src/assets/images/etiquetas_tienda/nacha_chacra.jpg';
import CasaPetriniRose from '../../../src/assets/images/etiquetas_tienda/casaPetrini_rose.jpg';
import PerdicesRose from '../../../src/assets/images/etiquetas_tienda/lasPerdices_rose.jpg';

const winery = [
  {
    id: 1,
    nombre: 'Ben Marco',
    bodega: 'Susana Balbo',
    tipo: 'tinto',
    cepa: 'Cabernet Franc',
    aniada: 2017,
    precio: 2680,
    imagen: BenMarcoCf,
  },
  {
    id: 2,
    nombre: 'Achaval Ferrer',
    bodega: 'Achaval Ferrer',
    tipo: 'tinto',
    cepa: 'Merlot',
    aniada: 2020,
    precio: 2850,
    imagen: AchavalFerrerMerlot,
  },
  { id: 3, nombre: 'Ver Sacrum', bodega: 'Ver Sacrum', tipo: 'tinto', cepa: 'Garnacha', aniada: 2020, precio: 3000, imagen: VerSacrum },
  {
    id: 4,
    nombre: 'Tinto de la Casa',
    bodega: 'Riccitelli Wines',
    tipo: 'tinto',
    cepa: 'Malbec',
    aniada: 2020,
    precio: 5200,
    imagen: TintoCasa,
  },
  { id: 5, nombre: 'Piel Negra', bodega: 'Bressia', tipo: 'tinto', cepa: 'Pinot Noir', aniada: 2018, precio: 7500, imagen: PielNegra },
  { id: 6, nombre: 'Altimus', bodega: 'El Esteco', tipo: 'tinto', cepa: 'Blend', aniada: 2017, precio: 9950, imagen: Altimus },
  { id: 7, nombre: 'Puramun', bodega: 'Pepe Galante', tipo: 'blanco', cepa: 'Chardonnay', aniada: 2019, precio: 1446, imagen: Puramun },
  { id: 8, nombre: 'Colome', bodega: 'Colome Wines', tipo: 'blanco', cepa: 'Torrontes', aniada: 2020, precio: 1750, imagen: Colome },
  { id: 9, nombre: 'Mendel', bodega: 'Bodega Mendel', tipo: 'blanco', cepa: 'Semillon', aniada: 2020, precio: 2299, imagen: Mendel },
  { id: 10, nombre: 'Zaha', bodega: 'Teho Wines', tipo: 'blanco', cepa: 'Marsanne', aniada: 2019, precio: 2875, imagen: Zaha },
  {
    id: 11,
    nombre: 'Linda Flor',
    bodega: 'Monteviejo',
    tipo: 'blanco',
    cepa: 'Chardonnay',
    aniada: 2019,
    precio: 4300,
    imagen: LindaFlor,
  },
  {
    id: 12,
    nombre: 'Ji Ji Ji',
    bodega: 'Gen del Alma',
    tipo: 'blanco',
    cepa: 'Chenin Blanc',
    aniada: 2020,
    precio: 1275,
    imagen: Jijiji,
  },
  {
    id: 13,
    nombre: 'Signature',
    bodega: 'Susana Balbo',
    tipo: 'rosado',
    cepa: 'Pinot Noir - Malbec',
    aniada: 2021,
    precio: 5200,
    imagen: Signature,
  },
  { id: 14, nombre: 'Flora', bodega: 'Teho Wines', tipo: 'rosado', cepa: 'Pinot Noir', aniada: 2019, precio: 3300, imagen: Flora },
  { id: 15, nombre: 'Padma', bodega: 'Corazon del Sol', tipo: 'rosado', cepa: 'Garnacha', aniada: 2021, precio: 6000, imagen: Padma },
  { id: 17, nombre: 'Nacha', bodega: 'Chacra', tipo: 'rosado', cepa: 'Pinot Noir', aniada: 2021, precio: 6490, imagen: Nacha },
  {
    id: 18,
    nombre: 'Casa Petrini Rosé',
    bodega: 'Casa Petrini',
    tipo: 'rosado',
    cepa: 'Malbec - Tannat',
    aniada: 2021,
    precio: 1550,
    imagen: CasaPetriniRose,
  },
  { id: 16, nombre: 'Rosé', bodega: 'Las Perdices', tipo: 'rosado', cepa: 'Malbec', aniada: 2021, precio: 2700, imagen: PerdicesRose },
];

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => {
        res(winery);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);
  const onAdd = (quantity) => {
    //! quantity llega hasta aca desde el valor count en ItemCount
    console.log(`Agregaste ${quantity} unidades`);
  };
  return (
    <>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
}
