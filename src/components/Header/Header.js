import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions/actions'


class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <header>
        <p>{user.name}</p>
        <h1>Rancid Tomatillos</h1>
        <Link to={user.name ? '/' : '/login'} onClick={this.props.logoutUser} >
          {user.name ? "Logout" : "Login"}
        </Link>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: (user = {}) => {dispatch(setUser(user))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
