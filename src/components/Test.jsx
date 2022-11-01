import React from 'react';

export default function Test() {
  //! CONTROL ARRAY CON DATOS
  // let jugadores = ['lucas', 'seba', 'mato', 'toti'];
  // jugadores.length > 0 ? console.log(jugadores) : console.log('hay un error, el array esta vacio');
  //! PAGO: SI o NO
  // let pago = 0;
  // pago > 0 ? console.log('la persona pago') : console.log('no pago lo que debia');
  //! CONTROLAR HASTA SABER SI PAGO O NO
  // let pago = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     // res('El cliente pago!');
  //     rej(`No pago!`);
  //     console.log(`Primero verificamos si pago el cliente:`);
  //   }, 2000);
  // });
  // pago
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((e) => {
  //     console.error(`El cliente no pago`);
  //   })
  //   .finally(() => {
  //     console.log(`Se termino el contrato con el cliente`);
  //   });
  //! MOSTRAR UN ARRAY CON 1 OBJETO
  // let jugadores = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res({ id: 1, name: `Toti` });
  //     // rej(`No pago!`);
  //     console.log(`Primero verificamos que jugadores se anotaron:`);
  //   }, 2000);
  // });
  // jugadores
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   })
  //   .finally(() => {
  //     console.log(`Se termino!`);
  //   });
  //! FUNCTION .MAP
  // let numero = 10;
  // let nombre = 'cristian';
  // let jugadores = [
  //   { id: 1, name: `Lucas` },
  //   { id: 2, name: `Toti` },
  // ];
  // return (
  //   <div>
  //     <div>
  //       {jugadores.map((item) => {
  //         return (
  //           <>
  //             <p style={{ backgroundColor: 'red' }}>ID: {item.id}</p> <p>NOMBRE: ({item.name})</p>
  //           </>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
}
