import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import ProfilePanel from './ProfilePanel';

var modalStyle = {
  textAlign:'left'
}

class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

  }
  closeModal = () => {
  this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title style={modalStyle}>Friends List</Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalStyle}>
            <h4>Text in a modal</h4>
            <p>You currently do not have any friends</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="container" id="home-container">
          <div className="row">
            <div className="col-md-3">
              <ProfilePanel />
            </div>
            <div className="col-md-6">
              <ul className="list-group media-list media-list-stream">
                <li className="media list-group-item p-15">
                  <p className="pull-left text-v-c">To: </p>
                  <input type="text" className="form-control To-text-field " />
                </li>
                <li className="media list-group-item">
                  <div className="Message-box">
                    <form className="Message-compose-form">
                      <textarea className="Message-textarea" placeholder="Write a message here">
                      </textarea>
                    </form>
                    <div className="Message-box-bottom">
                      <div className="attachment-forms pull-left">
                        <span className="icon icon-images icon-lg"></span>
                        <span className="icon icon-lg icon-attachment p-l-sm"></span>
                      </div>
                      <div className="pull-right">
                        <button type="button" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="panel panel-default m-b-md">
                <div className="panel-heading">
                  Invite Others
                </div>
                <div className="panel-body text-align-left">
                  <p>Would you like to invite your friends to contribute?</p>
                  <button type="button" className="btn btn-primary-outline" onClick={this.openModal}>
                    <span className="icon icon-plus"></span>
                    Invite
                  </button>
                </div>
              </div>
              <div className="panel panel-default m-b-md">
                <div className="panel-heading">
                  Privacy
                </div>
                <div className="panel-body text-align-left">
                  <div className="checkbox-group">
                  <p className="checkbox-title">Public</p>
                    <div className="checkbox custom-control custom-checkbox app-checkbox">
                      <label>
                        <input type="checkbox" />
                        <span className="custom-control-indicator"></span>
                      Anyone can view this post
                      </label>
                    </div>
                  </div>
                  <div className="checkbox-group">
                  <p className="checkbox-title">Private</p>
                    <div className="checkbox custom-control custom-checkbox app-checkbox">
                      <label>
                        <input type="checkbox" />
                        <span className="custom-control-indicator"></span>
                        Only your friends can view this post
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMessage;
