import React from 'react';
import {useDispatch} from 'react-redux';
import { addNewCity } from '../../../store/citySlice';
// import {} 
import '../search-bar.css';

export default function SearchResult({item, foundValue}) {
  // console.log(foundValue);
  const dispatch = useDispatch();

  const setFound = () => {
    const data = `${item.LocalizedName}, ${item.Country.LocalizedName}`;
    foundValue(data);
    // dispatch(addNewCity(item.LocalizedName));
  }
  return (
    <div
      className="result__item"
      onClick={setFound}
      >
      <div className="result__city">
        {item.LocalizedName}
      </div>
      <div className="result__country">
        {item.Country.LocalizedName}
      </div>
    </div>
  )
}
