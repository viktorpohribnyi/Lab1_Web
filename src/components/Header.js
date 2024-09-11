import React from 'react';

function Header({ isLoggedIn, handleLogin, selectedItems }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Аніме-магазин "Наруто"</h1>
        <div className="header-controls">
          <span className="selected-items">Обрано товарів: {selectedItems}</span>
          <button className="login-button" onClick={handleLogin}>
            {isLoggedIn ? 'Вихід' : 'Вхід'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
