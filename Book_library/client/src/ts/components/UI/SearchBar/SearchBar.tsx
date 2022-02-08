import React, {FC, useState} from 'react';
import './searchbar.scss';

const SearchBarInner:FC = () => {
  // const [value, setValue] = useState('');
  // const [cities, setCities] = useState([])
  // const dispatch = useDispatch();
  const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (cities[0]) {
    //   dispatch(fetchCityUI(cities[0].Key));
    //   dispatch(addNewCity({
    //     city: cities[0].LocalizedName,
    //     countryName: cities[0].Country.LocalizedName,
    //   }));
    // } else {
    //   dispatch(addPopUpShow({
    //     value: true,
    //     city: value,
    //   }));
    // }
    // setValue('');
    // setCities([]);
  };
  // const show = async (event) => {
  //   setValue(event);
  //   try {
  //     const res = await getSearchCity(event);
  //     const city = res.data;
  //     setCities(city);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const setFoundValue = useCallback((value) => {
  //   setValue('');
  //   setCities([]);
  // }, []);
  return (
    <form
      className='search__form'
      onSubmit={handlerSearch}
      >
      <div className="search__bar">
        <input
          className="input__search"
          type="text"
          placeholder="Enter book for search..." 
          // value={value}
          // onChange={event => show(event.target.value)}
        />
        <img className="input__icon" src='./assets/search-icon.svg' alt="search icon" />
        {/* {cities.length > 0 ? 
          <div className="search__result">
            {cities.map((item) => 
              <SearchResult
                key={item.Key}
                item={item}
                foundValue={setFoundValue}
              />
            )}
          </div>
          : null
        } */}
      </div>
      <input 
        className='search__button'
        type="submit"
        value="Search" 
      />
    </form>
  )
}

export const SearchBar = React.memo(SearchBarInner);
