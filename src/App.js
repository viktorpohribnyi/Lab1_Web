import React, { useState } from 'react';
import ProductDetail from './components/ProductDetail';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Phone', price: 5000 },
    { id: 2, name: 'Laptop', price: 15000 },
    { id: 3, name: 'Tablet', price: 7000 },
  ];

  const exchangeRate = 0.027; // курс на момент створення

  return (
    <div className="container">
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ProductDetail product={product} exchangeRate={exchangeRate} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
