import React, { useState, useEffect } from 'react';
import MyComponent from './components/Component';
import { useStatus } from './hooks/useStatus';
import { useConsoleLog } from './hooks/useConsoleLog';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const status = useStatus(counter);
  useConsoleLog(counter);

  // Запуск та пауза лічильника
  const toggleCounter = () => setIsPaused(!isPaused);

  // Effect для оновлення лічильника кожні 3 секунди, якщо він не на паузі
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCounter(prev => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Effect з залежністю — лічильник і статус оновлюються в залежності від зміни counter
  useEffect(() => {
    console.log(`Counter змінився: ${counter}`);
    document.title = `Лічильник: ${counter}`;
  }, [counter]);

  return (
    <div className="App">
      <h1>Лабораторна робота 4</h1>
      <p>Лічильник: {counter}</p>
      <p>Статус: {status}</p>

      <div className="buttons">
        <button onClick={toggleCounter}>
          {isPaused ? 'Продовжити' : 'Пауза'}
        </button>
        <button onClick={() => setCounter(0)}>Скинути</button>
      </div>

      <MyComponent counter={counter} />
    </div>
  );
}

export default App;
