import React from 'react';

const CurrencyConverter = ({ priceInUAH, exchangeRate }) => {
  const priceInUSD = (priceInUAH * exchangeRate).toFixed(2);

  return (
    <div className="currency-converter">
      <p>Price in USD: ${priceInUSD}</p>
    </div>
  );
};

export default CurrencyConverter;
