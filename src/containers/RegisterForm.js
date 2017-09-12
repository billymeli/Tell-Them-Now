import React, { Component } from 'react';
import RegisterFormDescriptions from '../components/RegisterFormDescriptions';
import { Field, reduxForm, propTypes } from 'redux-form';
import { Redirect } from 'react-router-dom';
import * as Actions from '../actions/index';
import { connect } from 'react-redux';
var firebase = require("firebase");

class RegisterForm extends Component {

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
  this.props.signUp(values);

};

handleFacebookSignUp(e) {
  e.preventDefault();
  this.props.facebookSignUp();
}

handleTwitterSignUp(e) {
  e.preventDefault();
  this.props.twitterSignUp();
}

renderAuthenticationError() {
  if (this.props.authenticationError) {
    return <div className="alert alert-danger errorDiv">{ this.props.authenticationError }</div>;
  }
  return <div></div>;
}

  render() {


    return(
      <div className="row register-form">
        <div className="col-sm-4 col-sm-offset-1">
          { this.renderAuthenticationError() }
          <form  onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <div className="r-form">
              <Field
                type="text"
                placeholder="First name..."
                name="firstName"
                component={this.renderField}
                />
              <Field
                type="text"
                placeholder="Last name..."
                name="lastName"
                component={this.renderField}
                />
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
              <button action="submit" className="loginBtn">Sign me up!</button>

          </div>
        </form>
        <div className=" row social-login ">
          <div className="col-sm-10 col-sm-offset-1 social">
          <div className="col-sm-6 s-text">
            Or sign up with:
          </div>
          <div className="social-login-buttons col-sm-6">
              <button  className="btn-link-1" onClick={event => this.handleFacebookSignUp(event)} id="butn-fb"><i className="fa fa-facebook"></i></button>
              <button  className="btn-link-1" onClick={event => this.handleTwitterSignUp(event)} ><i className="fa fa-twitter"></i></button>
          </div>
          </div>
        </div>
      </div>
          <RegisterFormDescriptions />
      </div>
    );
  }
}

function validate(values) {
   const errors = {};

   if (!values.firstName) {
     errors.firstName = 'Required';
   }
   if (!values.lastName) {
     errors.lastName = 'Required';
   }
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
  form: 'registerForm'
})(RegisterForm));
