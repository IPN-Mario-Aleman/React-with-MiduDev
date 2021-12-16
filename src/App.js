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
          <h1>Giphy App</h1>
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={() => <h1>Error 404 :c</h1>}
              path='/404'
            />
          </GifContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
