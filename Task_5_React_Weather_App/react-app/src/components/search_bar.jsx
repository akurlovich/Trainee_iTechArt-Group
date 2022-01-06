import React from 'react';
import logo from '../assets/search-icon.svg';
import '../styles/search-bar.css';

function SearchBar() {
  return (
     <form className='search_form'>
        <div className="search_bar">
          <input
            className="input-search"
            type="text"
            placeholder="Enter user First Name for search..." />
          <img className="input-icon" src={logo} alt="" />
        </div>
      </form>
  )
}

export default SearchBar;
