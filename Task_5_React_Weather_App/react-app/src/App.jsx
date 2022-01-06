import React from 'react';
import SearchBar from './components/search_bar.jsx';

function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="title">
          Weather App
        </div>
        <SearchBar/>
        <div className="weather">
          weather 
        </div>
      </main>
    </div>
 );

}

export default App;
