import React from 'react';
import './App.css';

function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <p>{info}</p>
    </div>
  );
}

export default InfoBox;
