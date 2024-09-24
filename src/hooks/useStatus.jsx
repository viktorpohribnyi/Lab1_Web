import { useState, useEffect } from 'react';

// Хук для отримання статусу з додатковими умовами
export function useStatus(counter) {
  const [status, setStatus] = useState('Маленький');

  useEffect(() => {
    if (counter > 30) {
      setStatus('Гігантський');
    } else if (counter > 20) {
      setStatus('Великий');
    } else if (counter > 10) {
      setStatus('Середній');
    } else {
      setStatus('Маленький');
    }
  }, [counter]);

  return status;
}
