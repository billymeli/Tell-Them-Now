import React, { Component } from 'react';


class LoginFormDescriptions extends Component {
  render(){
    return(
      <div className="col-sm-6 forms-right-icons">
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-user"></i></div>
          <div className="col-sm-10">
            <h3>New Features</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-eye"></i></div>
          <div className="col-sm-10">
            <h3>Easy To Use</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 icon"><i className="fa fa-twitter"></i></div>
          <div className="col-sm-10">
            <h3>Social Integrated</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginFormDescriptions;
