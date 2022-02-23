import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IBookResponse } from '../../types/IBookResponse';
import { BookBlock } from '../BookBlock/BookBlock';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { FormInput } from '../UI/FormInput/FormInput';
import './searchblock.scss';
import '../ResultBlock/resultblock.scss';
import { getBooks } from '../../store/reducers/BookReducer/BookActionCreatores';
import { randomBGColor } from '../../services/ClientServices/RandomBGColor';
import { BOOKS_BG_COLORS } from '../../constants/user';

const SearchBlockInner:FC = () => {
  const {books} = useAppSelector(state => state.bookReducer);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [foundBooks, setFoundBooks] = useState<IBookResponse[]>([]);

  useEffect(() => {
    if (!books.length) {
      dispatch(getBooks());
    }
  }, []);

  useEffect(() => {
    setFoundBooks(searchBooks())
  }, [books])
  

  const searchBooks = () => {
    const found = books.filter(book => book.title.toLowerCase().includes(title)).filter(book => book.author.toLowerCase().includes(author));
    return found;
  };

  const searchHandler = () => {
    setFoundBooks(searchBooks());
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="searchblock">
        <div className="searchblock__container">
          <div className="searchblock__title">
            <FormInput
              label='Enter book title'
              setData={setTitle}
              errorShow={false}
            />
          </div>
          <div className="searchblock__author">
            <FormInput
              label='Enter book author'
              setData={setAuthor}
              errorShow={false}
            />
          </div>
          <div className="searchblock__genre">
            <div className="searchblock__genre__title">
              Choose book genre:
            </div>
            <Checkbox field='Computer Science'/>
            <Checkbox field='Deteсtive'/>
            <Checkbox field='Dramma'/>
            <Checkbox field='Fantasy'/>
            <Checkbox field='History'/>
            <Checkbox field='Sci-Fi'/>
            <Checkbox field='Thrillers'/>
          </div>
          <div className="searchblock__year">
            <div className="searchblock__year__title">
              Choose book years:
            </div>
            <div className="searchblock__year__block">
              <input className="searchblock__year__block_input" type="number"/>
              <div>
                -
              </div>
              <input className="searchblock__year__block_input" type="number"/>
            </div>
          </div>
          <div className="searchblock__booking">
            <Checkbox field='Show booked books?'/>
          </div>
          <div
            onClick={searchHandler}
            className="searchblock__button">
            Search
          </div>
        </div>
      </div>
      <div className="resultblock">
      {foundBooks.map(item => 
        <BookBlock key={item._id} book={item} bgColor={BOOKS_BG_COLORS[randomBGColor()]}/>
      )}
      </div>
    </>
  );
};

export const SearchBlock = React.memo(SearchBlockInner);
