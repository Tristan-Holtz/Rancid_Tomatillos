import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      error: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyInputs = (event) => {
    event.preventDefault()
    if(this.state.name !== 'Greg' && this.state.password !== 'abc123') {
      return this.setState({error: 'Incorrect name and password entered.'})
    } if(this.state.name !== 'Greg') {
      this.setState({error: 'Incorrect name entered.'})
    } if(this.state.password !== 'abc123') {
      this.setState({error: 'Incorrect password entered.'})
    } else {
      console.log('correct login')
    }
  }

  render() {
    return (
      <form className="login-form">
        <label htmlFor="login-name">Name</label>
        <input
          onChange={this.handleChange}
          name="name"
          id="login-name"
          placeholder="Name"
        >
        </input>
        <label htmlFor="login-password">Password</label>
        <input
          onChange={this.handleChange}
          name="password"
          id="login-password"
          placeholder="Password"
          >
        </input>
        <button onClick={this.verifyInputs}>Login</button>
        <div className='form-error'>
          <p className='error'>{this.state.error}</p>
        </div>
      </form>
    );
  }
}
