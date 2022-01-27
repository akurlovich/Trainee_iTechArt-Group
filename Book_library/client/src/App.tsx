import React, { FC } from 'react';
import { AllBooks } from './ts/components/AllBooks/AllBooks';
import { Footer } from './ts/components/Footer/Footer';
import { Header } from './ts/components/Header/Header';

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="container">
        <AllBooks/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
