import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions/actions';

export class Header extends Component {
  render() {
    const { user } = this.props;

    // return (
    //   <header>
    //     <h1>RANCID<span>TOMATILLOS</span></h1>
    //     <div>
    //       <p>{user.name}</p>
    //       <Link
    //         className="login-logout-link"
    //         to={user.name ? '/' : '/login'}
    //         onClick={() => {
    //           this.props.logoutUser();
    //         }}
    //       >
    //         {user.name ? 'Logout' : 'Login'}
    //       </Link>
    //     </div>
    //   </header>
    // );
    return (
      <header>
        <h1>RANCID<span>TOMATILLOS</span></h1>
        <div>
          {user.name && <img src={process.env.PUBLIC_URL + '/user-icon.svg'} alt="user icon" />}
          <p>{user.name}</p>
          <Link
            className="login-logout-link"
            to={user.name ? '/' : '/login'}
            onClick={() => {
              this.props.logoutUser();
            }}
          >
            {user.name ? 'Logout' : 'Login'}
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: (user = '') => {dispatch(setUser(user))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
