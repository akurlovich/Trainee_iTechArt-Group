import React, { FC } from 'react';
import './aboutlibrary.scss';

const AboutLibraryInner:FC = () => {
  return (
    <div className="about">
      <div className="about__title">
        In our Book Library you can booking different books and issued them!
      </div>
    </div>
  )
};

export const AboutLibrary = React.memo(AboutLibraryInner);
