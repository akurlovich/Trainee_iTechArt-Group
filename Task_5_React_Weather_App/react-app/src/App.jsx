import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import Weather from './components/Weather/weather.jsx';

function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="title">
          Weather App
        </div>
        <SearchBar/>
        <Weather/>
      </main>
    </div>
 );

}

export default App;
