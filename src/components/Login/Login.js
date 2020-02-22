import React, { Component } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';
import { getUser } from '../../apiCalls';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
      emailError: '',
      passwordError: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  verifyInputs = () => {
    return this.props.user ? true : false
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.createUser();
    (this.state.email !== 'greg@turing.io') && this.setState({emailError: 'Incorrect email entered.'});
    await (this.state.password !== 'abc123') && this.setState({passwordError: 'Incorrect password entered.'});
    await this.verifyInputs();
  }

  createUser = () => {
    const { email, password } = this.state;
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v1/login';
    const postOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return getUser(url, postOptions)
      .then(data => this.props.setUser(data.user))
      .catch(error => console.log(error))
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
        <Link to={'/'} >
          <div>Enter</div>
        </Link>
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
  setUser: (user) => {dispatch(setUser(user))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
