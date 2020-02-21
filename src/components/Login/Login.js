import React, { Component } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      error: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyInputs = (event) => {
    event.preventDefault()
    if(this.state.name !== 'Greg' && this.state.email !== 'greg@turing.io' && this.state.password !== 'abc123') {
      return this.setState({error: 'Incorrect name, email, and password entered.'})
    } if(this.state.name !== 'Greg' && this.state.password !== 'abc123') {
      return this.setState({error: 'Incorrect name and password entered.'})
    } if(this.state.name !== 'Greg' && this.state.email !== 'greg@turing.io') {
      return this.setState({error: 'Incorrect name and email entered.'})
    } if(this.state.email !== 'greg@turing.io' && this.state.password !== 'abc123') {
      return this.setState({error: 'Incorrect email and password entered.'})
    } if(this.state.name !== 'Greg') {
      this.setState({error: 'Incorrect name entered.'})
    } if(this.state.password !== 'abc123') {
      this.setState({error: 'Incorrect password entered.'})
    } else {
      console.log('correct login')
      this.createUser()
    }
  }

  createUser = () => {
    const user = {name: this.state.name, email: this.state.email, password: this.state.password}
    this.props.setUser(user)
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
        <label htmlFor="login-email">Email</label>
        <input
          onChange={this.handleChange}
          name="email"
          id="login-email"
          placeholder="Email"
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);