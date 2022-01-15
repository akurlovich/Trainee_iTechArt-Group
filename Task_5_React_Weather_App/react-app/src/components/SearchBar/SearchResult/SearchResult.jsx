import React from 'react';
import '../search-bar.css';

export default function SearchResult(props) {
  console.log(props.item);
  return (
    <div className="result__item">
      <div className="result__city">
        {props.item.LocalizedName}
      </div>
      <div className="result__country">
        {props.item.Country.LocalizedName}
      </div>
    </div>
  )
}
