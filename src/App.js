import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Context from './context/StaticContext'
import {Link, Route, Switch} from 'wouter'
import { GifContextProvider } from './context/GifContext';
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <Context.Provider value={{
      name: 'Mario',
      status: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifContextProvider>
            <Switch>
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
                component={ErrorPage}
                path="/:rest*" 
              />
            </Switch>
          </GifContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
