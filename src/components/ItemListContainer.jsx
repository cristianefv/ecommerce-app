import React from 'react';

let myDate = new Date();
let hours = myDate.getHours();
let greet;
if (hours < 12) greet = 'mañana';
else if (hours >= 12 && hours <= 19) greet = 'tarde';
else if (hours >= 19 && hours <= 24) greet = 'noche';
export default function ItemListContainer({ greeting }) {
  return <>{greeting ? <h1 className="saludo">Que tengas una buena {greet}!</h1> : ' '}</>;
}
