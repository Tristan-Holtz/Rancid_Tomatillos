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
      nameError: '',
      emailError: '',
      passwordError: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyInputs = (event) => {
    event.preventDefault()
    if(this.state.name !== 'Greg') {
      this.setState({nameError: 'Incorrect name entered.'})
    } if(this.state.email !== 'greg@turing.io') {
      this.setState({emailError: 'Incorrect email entered.'})
    } if(this.state.password !== 'abc123') {
      this.setState({passwordError: 'Incorrect password entered.'})
    } else {
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
        <p className='error'>{this.state.nameError}</p>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={this.handleChange}
          name="email"
          id="login-email"
          placeholder="Email"
        >
        </input>
        <p className='error'>{this.state.emailError}</p>
        <label htmlFor="login-password">Password</label>
        <input
          onChange={this.handleChange}
          name="password"
          id="login-password"
          placeholder="Password"
          >
        </input>
        <p className='error'>{this.state.passwordError}</p>
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