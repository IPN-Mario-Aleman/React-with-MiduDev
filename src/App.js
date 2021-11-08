import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import {Link, Route} from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('german')

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/Anime">Gifs de Animes</Link>
        <Link to="/gif/perros">Gifs de perros</Link>
        <Link to="/gif/gatos">Gifs de gatos</Link>
        <Link to="/gif/méxico">Gifs de México</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
