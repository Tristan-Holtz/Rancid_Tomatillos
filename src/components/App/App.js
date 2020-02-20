import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import './App.css';


class App extends Component {
  render() {
    return <Movies />;
  }
}

export default App;
