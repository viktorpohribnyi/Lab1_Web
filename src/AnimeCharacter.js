import React from 'react';
import './App.css';

function AnimeCharacter({ name, description, image }) {
  return (
    <div className="anime-character">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default AnimeCharacter;
