import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
var firebase = require("firebase");

class ProfilePanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      croppedImg: "assets/img/user_default_img.jpeg"
    }
  }


  render() {
    var user = firebase.auth().currentUser;
    var email, uid, photoURL;

    if (user != null) {
      email = user.email;
      uid = user.uid;
      photoURL = user.photoURL;

      firebase.database().ref(`users/${uid}`).once('value').then(snapshot => {
        var username = snapshot.val().fullName;
        this.setState({username});
        // ...
      });
    }
    return(
      <div className="panel panel-default panel-profile m-b-md">
        <div className="panel-heading" id="p-header-bckg" >
        </div>
        <div className="panel-body text-center">
            <div className="avatar-photo">
              <img src={photoURL? photoURL : this.state.croppedImg} className="panel-profile-img" />
            </div>
          <h5 className="panel-title">
            <a className="text-inherit" href="#">{this.state.username}</a>
          </h5>
          <p className="m-b-md">
            Biography goes here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed tincidunt mi, vel pulvinar nunc.
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, Actions)(ProfilePanel);
