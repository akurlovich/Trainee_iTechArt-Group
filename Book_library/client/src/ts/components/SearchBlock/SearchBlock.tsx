import React, { FC, useState } from 'react';
import { Checkbox } from '../UI/Checkbox/Checkbox';
import { FormInput } from '../UI/FormInput/FormInput';
import './searchblock.scss';

const SearchBlockInner:FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
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
        <div className="searchblock__button">
          Search
        </div>
      </div>
    </div>
  );
};

export const SearchBlock = React.memo(SearchBlockInner);
