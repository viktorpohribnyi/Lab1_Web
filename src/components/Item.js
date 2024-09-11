import React from 'react';

function Item({ item, onCheckboxChange }) {
  return (
    <div className="item">
      <label>
        <input type="checkbox" onChange={() => onCheckboxChange(item.id)} />
        <span className="item-name">{item.name}</span> - <span className="item-price">{item.price}¥</span>
        <p className="item-description">{item.description}</p>
      </label>
    </div>
  );
}

export default Item;