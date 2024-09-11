import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [selectedItems, setSelectedItems] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelect = (count) => {
    setSelectedItems(count);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const items = [
    { id: 1, name: 'Кунай', price: 50, description: 'Метальний ніж з гострим кінцем, використовуваний шинобі.' },
    { id: 2, name: 'Сенбон', price: 30, description: 'Тонкі голки для метання, ідеальні для точних атак.' },
    { id: 3, name: 'Шурікен', price: 20, description: 'Зірковидний метальний диск, основна зброя ніндзя.' },
    { id: 4, name: 'Катана', price: 500, description: 'Класичний японський меч, використовуваний шинобі для ближнього бою.' },
    { id: 5, name: 'Акацукі плащ', price: 150, description: 'Фірмовий плащ членів організації Акацукі.' },
    { id: 6, name: 'Ідзанагі маска', price: 80, description: 'Маска для спеціальних ритуалів і технік.' },
    { id: 7, name: 'Книга ніндзя', price: 40, description: 'Посібник з ніндзюцу та інших технік ніндзя.' },
    { id: 8, name: 'Аматерасу амулет', price: 200, description: 'Амулет з силою священного полум\'я Аматерасу.' },
    { id: 9, name: 'Костюм Джоніна', price: 300, description: 'Бойовий костюм, який носить джонін Конохи.' },
  ];

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} selectedItems={selectedItems} />
      <Menu />
      <ItemList items={items} handleSelect={handleSelect} />
      <Footer />
    </div>
  );
}

export default App;
