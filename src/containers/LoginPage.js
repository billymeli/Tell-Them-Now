import React, { Component } from 'react';
import RegisterLoginBtn from '../components/RegisterLoginBtn.js';
import RegisterForm from './RegisterForm.js';
import LoginForm from './LoginForm.js';
import Logo from '../components/Logo.js';
import Footer from '../components/Footer.js';
var firebase = require("firebase");

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      showLogin: false,
      showRegister: true,
      registerActive: 'show-register-form active',
      loginActive: 'show-login-form'
    }
    this.registerClick = this.registerClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  registerClick() {
    this.setState({
      showLogin: false,
      showRegister: true,
      registerActive: 'show-register-form active',
      loginActive: 'show-login-form'
    });
  }
  loginClick() {
    this.setState({
      showLogin: true,
      showRegister: false,
      registerActive: 'show-register-form',
      loginActive: 'show-login-form active'
    });
  }


  render() {
    var FormElements;
    if (this.state.showRegister){
      FormElements = <RegisterForm />
    }
    else {
      FormElements = <LoginForm />
    }
    return (
      <div>
        <div className="overlay">
        <img src="assets/img/backgrounds/sadman-sakib-309023.jpg" className="bg" alt="" />
        </div>
        <div className="top-content">
          <div className="container">
            <Logo />
            <RegisterLoginBtn
              handleRegisterClick={this.registerClick}
              handleLoginClick={this.loginClick}
              RegisterClassName={this.state.registerActive}
              LoginClassName={this.state.loginActive} />
            <div>
              {FormElements}
            </div>
         </div>
         </div>
         <Footer />
      </div>

    );
  }
}

export default LoginPage;
