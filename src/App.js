import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Context from './context/StaticContext'
import {Link, Route} from 'wouter'
import { GifContextProvider } from './context/GifContext';

function App() {
  return (
    <Context.Provider value={{
      name: 'Mario',
      status: true
    }}>
      <div className="App">
        <section className="App-content">
          <h1>App</h1>
          <Link to="/">
            <img className="Logo" alt="Giffy Logo" src='/logo.jpg'/>
          </Link>
          <GifContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
