import React, { Component } from 'react';
import ProfilePanel from './ProfilePanel';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
var firebase = require("firebase");



class Home extends Component {

  render() {

    return (
      <div>
        <div className="container" id="home-container">
          <div className="row">
            <div className="col-md-3">
              <ProfilePanel />
            </div>
            <div className="col-md-6">
              <ul className="list-group media-list media-list-stream">
                <li className="media list-group-item create-section">
                  <p className="pull-left text-v-c">Start a new TTN here</p>
                  <Link to="/create">
                    <button type="button" className="btn btn-primary pull-right">
                      <span className="icon icon-plus"></span>
                      Create
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, Actions)(Home);
