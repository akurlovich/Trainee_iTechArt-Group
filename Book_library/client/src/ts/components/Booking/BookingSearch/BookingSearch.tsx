import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { FormInput } from '../../UI/FormInput/FormInput';

const BookingSearchInner:FC = () => {
  const { genres } = useAppSelector(state => state.bookReducer);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [showBookeds, setShowBookeds] = useState(true);

  const showBookedHandler = () => {
    setShowBookeds(prev => !prev)
  };
  const searchHandler = () => {
    setTitle('');
    setAuthor('');
    setYear('');
    setGenre('');
  };

  return (
    <>
      <div className="searchblock bookingsearch">
        <div className="searchblock__container">
          <div className="searchblock__title">
            <FormInput
              label='Enter book title'
              value={title}
              setData={setTitle}
              errorShow={false}
            />
          </div>
          <div className="searchblock__author">
            <FormInput
              label='Enter book author'
              value={author}
              setData={setAuthor}
              errorShow={false}
            />
          </div>
          <div className="searchblock__genre">
            <div className="searchblock__genre__title">
              Choose book genre:
            </div>
            <select
              onChange={(event) => {setGenre(event.target.value)} }
              value={genre}
              className='searchblock__genre__title'
              name="inputs__item__name">
              <option value=""></option>
              {genres.map(genre => 
                <option key={genre._id} value={genre.value}>{genre.value}</option>)}
            </select>
          </div>
          <div className="searchblock__year">
            <div className="searchblock__year__title">
              Choose book year:
            </div>
            <div className="searchblock__year__block">
              <input
                value={year}
                onChange={(e) => {setYear(e.target.value)}}
                className="searchblock__year__block_input" type="number"/>
            </div>
          </div>
          <div className="searchblock__booking">
            <Checkbox
              defaultChecked={showBookeds}
              setData={showBookedHandler}
              field='Show booked books?'/>
          </div>
          <div
            onClick={searchHandler}
            className="searchblock__button">
            Search
          </div>
        </div>
      </div>
    </>
  );
};

export const BookingSearch = React.memo(BookingSearchInner);
