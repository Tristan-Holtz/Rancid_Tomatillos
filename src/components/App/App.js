import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Header} />
          </Switch>
          <Route exact path="/" component={MoviesContainer} />
          <Route exact path="/movies/:id" component={MovieDetails} />
        </main>
      </Router>
    );
  }
}

export default App;
