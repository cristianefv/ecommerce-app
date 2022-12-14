import React from 'react';
import Item from './Item';

export default function ItemList({ vinoteca }) {
  return (
    <div className="cardContainer">
      {vinoteca.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
