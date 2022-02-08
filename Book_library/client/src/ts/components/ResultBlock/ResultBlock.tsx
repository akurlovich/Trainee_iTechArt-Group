import React, { FC } from 'react';
import { BookBlock } from '../BookBlock/BookBlock';
import './resultblock.scss';

const ResultBlockInner:FC = () => {
  return (
    <div className="resultblock">
      <BookBlock bgColor='#405F71'/>
      <BookBlock bgColor='#563E70'/>
      <BookBlock bgColor='#733F55'/>
      <BookBlock bgColor='#405F71'/>
      <BookBlock bgColor='#563E70'/>
      <BookBlock bgColor='#733F55'/>
      <BookBlock bgColor='#405F71'/>
      <BookBlock bgColor='#563E70'/>
      <BookBlock bgColor='#733F55'/>
      <BookBlock bgColor='#405F71'/>
      <BookBlock bgColor='#563E70'/>
      <BookBlock bgColor='#733F55'/>
    </div>
  );
};

export const ResultBlock = React.memo(ResultBlockInner);
