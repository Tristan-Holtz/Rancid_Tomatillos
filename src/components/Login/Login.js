import React, { Component } from 'react';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';
import { getUser } from '../../apiCalls';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      emailError: '',
      passwordError: '',
      error: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    (this.state.email !== 'greg@turing.io') && this.setState({emailError: 'Incorrect email entered.'});
    (this.state.password !== 'abc123') && this.setState({passwordError: 'Incorrect password entered.'});
    await this.createUser();
    if (!this.state.error) { this.setState({name: '', email: '', password: ''}) };
  }

  createUser = async () => {
    try {
      const { email, password } = this.state;
      const user = await getUser(email, password)
      await this.props.setUser(user.user)
    } catch ({message}) {
      this.setState({ message})
    }
  }

  render() {
    const { user } = this.props
    if (user.name) {
      return <Redirect to='/'></Redirect>
    }
    return (
      <form className="login-form" onSubmit={async (e) => await this.handleSubmit(e)}>
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
        <button>Enter</button>
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
