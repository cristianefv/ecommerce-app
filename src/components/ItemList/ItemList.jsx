import React from 'react';
import Item from '../Item/Item';
import '../../../src/components/ItemList/ItemList.css';

export default function ItemList({ data = [] }) {
  return (
    <>
      <div className="cardContainer">
        {data.map((wine) => {
          return <Item key={wine.id} info={wine} />;
        })}
      </div>
    </>
  );
}
