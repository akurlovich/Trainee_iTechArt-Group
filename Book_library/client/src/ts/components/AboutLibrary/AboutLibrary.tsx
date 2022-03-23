import React, { FC } from 'react';
import './aboutlibrary.scss';

const AboutLibraryInner:FC = () => {
  return (
    <div className="about">
      <div className="about__title">
        About page
      </div>
    </div>
  )
};

export const AboutLibrary = React.memo(AboutLibraryInner);
