import React, { Component } from 'react';


class RegisterFormDescriptions extends Component {
  render(){
    return(
      <div className="col-sm-6 forms-right-icons">
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-pencil"></i></div>
          <div className="col-sm-10">
            <h3>Beautiful Forms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-commenting"></i></div>
          <div className="col-sm-10">
            <h3>Awesome Login</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-magic"></i></div>
          <div className="col-sm-10">
            <h3>Great Registration</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterFormDescriptions;
