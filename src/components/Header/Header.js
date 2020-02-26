import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions/actions';

export class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <img
          className="rt-logo"
          src={process.env.PUBLIC_URL + '/rt-logo.png'}
          alt="rancid tomatoes"
        />
        <div className="user-icon-name">
          {user.name && (
            <img
              className="user-icon"
              src={process.env.PUBLIC_URL + '/user-icon.svg'}
              alt="user icon"
            />
          )}
          <p>{user.name}</p>
        </div>
        <Link
          className="login-logout-link"
          to={user.name ? '/' : '/login'}
          onClick={() => {
            this.props.logoutUser();
          }}
        >
          {user.name ? 'LOGOUT' : 'LOGIN'}
        </Link>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: (user = '') => {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
