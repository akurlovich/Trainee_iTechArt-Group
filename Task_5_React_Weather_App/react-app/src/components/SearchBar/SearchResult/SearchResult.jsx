import React from 'react';
import {useDispatch} from 'react-redux';
import { addNewCity, fetchCityUI } from '../../../store/citySlice';
import '../search-bar.css';

function SearchResultInner({item, foundValue}) {
  const dispatch = useDispatch();
  const setFound = () => {
    const data = `${item.LocalizedName}, ${item.Country.LocalizedName}`;
    foundValue(data);
    dispatch(fetchCityUI(item.Key));
    dispatch(addNewCity({
      city: item.LocalizedName,
      countryName: item.Country.LocalizedName,
    }));
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
  );
};

export const SearchResult = React.memo(SearchResultInner);
