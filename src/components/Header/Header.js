import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
    const { user } = this.props;
    console.log(user)
    

    return (
      <header>
        <p>username</p>
        <h1>Rancid Tomatillos</h1>
        <p>Logout</p>
      </header>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
