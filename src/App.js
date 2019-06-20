import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsFeed from './components/news-feed';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <header className="App-header">
        <h1>Mosaic News Feed</h1>
        <div className="container">
          <NewsFeed/>
        </div>
      </header>
    </div>
  );
}

export default App;
