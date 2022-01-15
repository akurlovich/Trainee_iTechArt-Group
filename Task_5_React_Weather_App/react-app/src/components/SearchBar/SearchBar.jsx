import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addCity, addTemperature} from '../../store/citySlice';
import axios from 'axios';
import logo from '../../assets/search-icon.svg';
import './search-bar.css';
import SearchResult from './SearchResult/SearchResult';

function SearchBar() {

  const [value, setValue] = useState('');
  const [cities, setCities] = useState([])

  const dispatch = useDispatch();

  
  const handlerSearch = (event) => {
    event.preventDefault();
    // const res = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&q=min');
    // const city = res.data;
    // console.log(city);
    // console.log(value);
    // dispatch(addCity(value));
    // dispatch(addTemperature('10000'));
    // setValue('');
  };

  const show = async (event) => {
    setValue(event);
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=COTk1PPFKxAfDAcm0YhYhDaTjhtn73GR&q=${event}`);
    const city = res.data;
    setCities(city);
    console.log(city);
  }

  return (
    <form
      className='search__form'
      onSubmit={handlerSearch}
      >
      <div className="search__bar">
        <input
          className="input__search"
          type="text"
          placeholder="Enter city for search..." 
          value={value}
          onChange={event => show(event.target.value)}
        />
        <img className="input__icon" src={logo} alt="search icon" />
        <div className="search__result">
          {cities.length && 
            cities.map((item) => 
              <SearchResult
                key={item.Key}
                item={item}
              />
            )
          }
        </div>
      </div>
      <input 
        className='search__button'
        type="submit"
        value="Search" 
      />
    </form>
  )
}

export default SearchBar;
