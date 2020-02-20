import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form className="login-form">
        <label htmlFor="login-name">Name</label>
        <input
          onChange={this.handleChange}
          name="name"
          id="login-name"
          placeholder="Name"
        ></input>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={this.handleChange}
          name="email"
          id="login-email"
          placeholder="Email"
        ></input>
        <label htmlFor="login-password">Password</label>
        <input
          onChange={this.handleChange}
          name="password"
          id="login-password"
          placeholder="Password"
        ></input>
        <button>Login</button>
      </form>
    );
  }
}
