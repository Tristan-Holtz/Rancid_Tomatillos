import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
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
            <Route exact path='/login'   component={Login} />
            <Route path='/' component={Header} />
          </Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movies/:id' component={MovieDetails}/>
        </main>
      </Router>
    )
  }
}

export default App;
