import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
<<<<<<< HEAD
import Login from '../Login/Login';
import Header from '../Header/Header';
=======
import './App.css';

>>>>>>> master

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Login />
        <Movies />
      </main>
    );
  }
}

export default App;
