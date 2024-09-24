import { useEffect } from 'react';

// Хук для виведення стану в консоль з логуванням до локального сховища
export function useConsoleLog(value) {
  useEffect(() => {
    console.log('Поточне значення:', value);

    // Запис у локальне сховище
    const logs = JSON.parse(localStorage.getItem('counterLogs')) || [];
    logs.push(`Counter змінився: ${value}`);
    localStorage.setItem('counterLogs', JSON.stringify(logs));
  }, [value]);
}
