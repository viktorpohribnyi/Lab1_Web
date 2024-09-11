import React from 'react';

function Login({ isLoggedIn, handleLogin }) {
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogin}>Вихід</button>
      ) : (
        <div>
          <input type="text" placeholder="Логін" />
          <input type="password" placeholder="Пароль" />
          <button onClick={handleLogin}>Увійти</button>
        </div>
      )}
    </div>
  );
}

export default Login;
