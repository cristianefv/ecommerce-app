import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

export default function ItemList({ vinoteca }) {
  return (
    <div className="cardContainer">
      {vinoteca.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
