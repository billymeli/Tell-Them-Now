import React, { Component } from 'react';
import LoginFormDescriptions from '../components/LoginFormDescriptions';
import { Field, reduxForm } from 'redux-form';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';
var firebase = require("firebase");

class LoginForm extends Component {


  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className={className}>
        <input type={field.type} {...field.input} placeholder={field.placeholder} className="form-control login-form" />
        <div className="help-block">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  handleFormSubmit = (values) => {
    this.props.signIn(values);
  };

  handleFacebookSignIn(e) {
    e.preventDefault();
    this.props.facebookSignIn();
  }

  handleTwitterSignIn(e) {
    e.preventDefault();
    this.props.twitterSignIn();
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger errorDiv">{ this.props.authenticationError }</div>;
    }
    return <div></div>;
  }

  render(){
    return(
      <div className="row login-form">
        <div className="col-sm-4 col-sm-offset-1">
          { this.renderAuthenticationError() }
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <div className="l-form">
              <Field
                type="text"
                placeholder="Email..."
                name="email"
                component={this.renderField}
                />
                <Field
                  type="password"
                  placeholder="Password..."
                  name="password"
                  component={this.renderField}
                  />
              <div id="password-link-wrap">
                <input type="checkbox" id='Remember-me-text' />  Remember me
                <a id="password-link" href="#">Forgot password?</a>
              </div>

              <button action="submit" className="loginBtn Sign-In-Btn">Sign in!</button>

            </div>
          </form>
          <div className="social-login">
              <p>Or login with:</p>
              <div className="social-login-buttons">
                <button className="btn-link-1" onClick={event => this.handleFacebookSignIn(event)} ><i className="fa fa-facebook"></i></button>
                <button className="btn-link-1" onClick={event => this.handleTwitterSignIn(event)} ><i className="fa fa-twitter"></i></button>
              </div>
          </div>
        </div>
        <LoginFormDescriptions />
      </div>
    );
  }
}

function validate(values) {
   const errors = {};

   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
   if (!values.password) {
     errors.password = 'Required';
   }
   return errors;
 }

 function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(reduxForm({
  validate,
  form: 'loginForm'
})(LoginForm));
