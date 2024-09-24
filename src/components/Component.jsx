import React, { useState, useEffect } from 'react';

function Component({ counter }) {
  const [isVisible, setIsVisible] = useState(true);
  
  // Показувати або приховувати блок в залежності від значення лічильника
  useEffect(() => {
    if (counter >= 15) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [counter]);

  return (
    <div className="my-component">
      {isVisible ? (
        <>
          <h2>Функціональний компонент</h2>
          <p>Цей компонент зникне при лічильнику більше 15.</p>
        </>
      ) : (
        <h2>Компонент приховано!</h2>
      )}
    </div>
  );
}

export default Component;
