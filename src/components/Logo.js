import React, { Component } from 'react';

class Logo extends Component {
  render(){
    return(
      <div className="row" id="logo-box">
        <img src="assets/img/logos/tellThemNowLogo.png" id="TTN-logo"/>
        <p className="logo-name">tell them now</p>
      </div>
    );
  }
}

export default Logo;
