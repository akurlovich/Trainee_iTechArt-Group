import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IBookResponse } from '../../types/IBookResponse';
import { BookBlock } from '../BookBlock/BookBlock';
import { ResultBlock } from '../ResultBlock/ResultBlock';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { FormInput } from '../UI/FormInput/FormInput';
import './searchblock.scss';
import '../ResultBlock/resultblock.scss';
import { getAllGenres, getBooks } from '../../store/reducers/BookReducer/BookActionCreatores';

const SearchBlockInner:FC = () => {
  const {books, genres} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [showBookeds, setShowBookeds] = useState(true);
  const [foundBooks, setFoundBooks] = useState<IBookResponse[]>([]);

  const showBookedHandler = () => {
    setShowBookeds(prev => !prev)
    console.log(showBookeds);
  };

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }
    dispatch(getAllGenres());
  }, []);

  useEffect(() => {
    setFoundBooks(searchBooks())
  }, [books]);

  
  
  const searchBooks = () => {
    const found = books.filter(book => book.title.toLowerCase().includes(title)).filter(book => book.author.toLowerCase().includes(author)).filter(book => book.year.toString().includes(year.toString())).filter(book => book.genre.filter(genre => genre.includes(genre)));
    return found;
  };

  // const memoSearchBooks = useMemo(() => searchBooks(), [books, title, author, showBookeds])



  const searchHandler = () => {
    setFoundBooks(searchBooks());
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <>
      <div className="searchblock">
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
              onChange={(event) => {setGenre(event.target.value), console.log(genre)} }
              value={genre}
              className='searchblock__genre__title'
              name="inputs__item__name">
              {/* <option disabled value="">Choose book genre:</option> */}
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
              {/* <div>
                -
              </div>
              <input className="searchblock__year__block_input" type="number"/> */}
            </div>
          </div>
          <div className="searchblock__booking">
          {/* <div className="checkbox">
            <input 
              defaultChecked={showBookeds}
              onChange={showBookedHandler}
              // checked
              className='checkbox__input' type="checkbox" name="checkbox__input" id='Show booked books?' />
            <label className='checkbox__label' htmlFor='Show booked books?'>Show booked books?</label>
            <img className='checkbox__image' src="./assets/check-solid.svg" alt="check icon" />
          </div> */}
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
      {foundBooks.length ? 
        <ResultBlock books={foundBooks}/>
        : <div className="searchblock__not-found">Sorry, Books not found!</div>
      }
      {/* <div className="resultblock">
      {foundBooks.map(item => 
        <BookBlock key={item._id} book={item} />
      )}
      </div> */}
    </>
  );
};

export const SearchBlock = React.memo(SearchBlockInner);
