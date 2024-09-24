import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CurrencyConverter from './CurrencyConverter';

const ProductDetail = ({ product, exchangeRate }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Price: {product.price} грн</p>
      <CurrencyConverter priceInUAH={product.price} exchangeRate={exchangeRate} />
      <CommentForm productName={product.name} />
    </div>
  );
};

export default ProductDetail;
