import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import AnimeScene from './AnimeScene';
import InfoBox from './InfoBox';
import AnimeCharacter from './AnimeCharacter';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Зображення команди 7 */}
      <div>
        <h2>Команда 7</h2>
        <p>Команда 7 — одна з команд у прихованому селищі Листа, що складається з чотирьох ніндзя: Наруто Узумакі, Саске Учіха, Сакури Харуно, та їх сенсея Какаші Хатаке. Вони відомі своїми пригодами, відданістю і дружбою, що розвивається у складних обставинах.</p>
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/b/bc/Naruto_Season_1_DVD.jpg"
          alt="Команда 7"
          style={{ width: '300px', borderRadius: '10px', margin: '20px 0' }}
        />
      </div>

      {/* Компоненти персонажів */}
      <AnimeCharacter
        name="Наруто Узумакі"
        description="Сміливий і цілеспрямований ніндзя з прихованого селища Листа, який мріє стати Хокаге! Він завжди бореться за своїх друзів і прагне миру для всього світу."
        image="https://upload.wikimedia.org/wikipedia/en/9/94/Naruto_Uzumaki.png"
      />
      <AnimeCharacter
        name="Саске Учіха"
        description="Останній з клану Учіха, Саске володіє надзвичайними здібностями і прагне відновити честь свого клану. Його шлях — це боротьба між темрявою та світлом."
        image="https://upload.wikimedia.org/wikipedia/en/7/79/Sasuke_Uchiha.png"
      />
      <AnimeCharacter
        name="Сакура Харуно"
        description="Ніндзя-медик з сильною волею та великою фізичною силою. Вона постійно вдосконалюється, щоб захищати своїх друзів і служити прихованому селищу Листа."
        image="https://upload.wikimedia.org/wikipedia/en/f/fd/Sakura_Haruno.png"
      />
      <AnimeCharacter
        name="Какаші Хатаке"
        description="Джонін і досвідчений ніндзя, відомий як Копі-Ніндзя Какаші. Він є мудрим сенсеєм команди 7, навчаючи своїх учнів справжньому значенню дружби і командної роботи."
        image="https://upload.wikimedia.org/wikipedia/en/8/8f/Kakashi_Hatake.png"
      />

      <AnimeScene />

      {/* Інформаційний блок у стилі аніме */}
      <InfoBox info="Аніме дозволяє мріяти, створювати і насолоджуватися неймовірними історіями. Дивіться більше аніме!" />

      <Footer />
    </div>
  );
}

export default App;
