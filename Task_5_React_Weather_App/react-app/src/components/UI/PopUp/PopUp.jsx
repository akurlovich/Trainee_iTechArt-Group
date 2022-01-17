import React from 'react';
import './popUp.css';

export default function PopUp() {
  return (
    <div className='popup__wrapper'>
      <div className="popup__container">
        <div className="popup__title">
          Weather for city "dfd" not found!
        </div>
        <button className="popup__button">
          Close
        </button>
      </div>
    </div>
  )
}
