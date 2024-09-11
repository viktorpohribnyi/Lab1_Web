import React, { useState } from 'react';
import Item from './Item';

function ItemList({ items, handleSelect }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    const isSelected = selectedItems.includes(itemId);
    const updatedSelectedItems = isSelected
      ? selectedItems.filter(id => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
    handleSelect(updatedSelectedItems.length);
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} onCheckboxChange={handleCheckboxChange} />
      ))}
    </div>
  );
}

export default ItemList;