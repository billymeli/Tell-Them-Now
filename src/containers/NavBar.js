import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as Actions from '../actions';
import { connect } from 'react-redux';
var firebase = require('firebase');


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { username: ''};
  }

  handleSignout() {
    this.props.signOut();
  }

  render() {
    var user = firebase.auth().currentUser;
    var email, uid;

    if (user != null) {
      email = user.email;
      uid = user.uid;



      firebase.database().ref(`users/${uid}`).once('value').then(snapshot => {
        var username = snapshot.val().fullName;
        this.setState({ username: username });
        // ...
      });
    }
    return (
      <div>
      <Navbar inverse collapseOnSelect className="app-navBar">
        <Navbar.Header>
          <img src="assets/img/logos/tellThemNowLogo.png" id="navLogo"/>
          <Navbar.Brand >

            <a id="navBrand" href="#">Tell Them Now</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
              <li>
                <NavLink to="/Home">
                  Home
                </NavLink>
              </li>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Welcome {this.state.username}!</NavItem>
              <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} onClick={() => this.handleSignout()}>Logout</MenuItem>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {this.props.children}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(NavBar);
