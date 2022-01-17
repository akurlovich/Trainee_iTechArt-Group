import React from 'react';
import { useDispatch } from 'react-redux';
import { addPopUpShow } from '../../../store/citySlice';
import './popUp.css';

export default function PopUp() {
  const dispatch = useDispatch();

  const closePopUp = () => {
    dispatch(addPopUpShow(false))
  }

  return (
    <div className='popup__wrapper'>
      <div className="popup__container">
        <div className="popup__title">
          Weather for city "dfd" not found!
        </div>
        <button
          className="popup__button"
          onClick={closePopUp}
          >
          Close
        </button>
      </div>
    </div>
  )
}
