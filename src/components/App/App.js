import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <main>
        <Login />
        <Movies />
      </main>
    );
  }
}

export default App;
