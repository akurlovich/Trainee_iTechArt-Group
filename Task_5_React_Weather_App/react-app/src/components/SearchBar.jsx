import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addCity, addTemperature} from '../store/citySlice';
import logo from '../assets/search-icon.svg';
import '../styles/search-bar.css';

function SearchBar() {

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handlerSearch = (event) => {
    event.preventDefault();
    console.log(value);
    dispatch(addCity(value));
    dispatch(addTemperature('10000'));
    setValue('');
  };

  return (
     <form
      className='search_form'
      onSubmit={handlerSearch}
      >
        <div className="search_bar">
          <input
            className="input-search"
            type="text"
            placeholder="Enter user First Name for search..." 
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <img className="input-icon" src={logo} alt="search icon" />
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
