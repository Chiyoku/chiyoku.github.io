import React from 'react';
import items from './items';
import Item from '../Item';

const List: React.VFC = () => (
  <div>
    {items.map((item) => (
      <Item name={item.name} desc={item.description} />
    ))}
  </div>
);

export default List;
