import React, { Component } from 'react';
import Modal from 'react-modal';
import '../App.css';

class ModalButton extends Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      open: false
    };
  }

  openModal() {
    this.setState({
      open: true
    }); 
  }

  closeModal() {
    this.setState({
      open: false
    }); 
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} type="button" className="btn btn-primary modal-button">+ Contacts Keeper</button>
        <Modal isOpen={this.state.open}>
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input type="text" className="form-control" id="first-name"/>
          </div>
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" className="form-control" id="last-name"/>
          </div>
          <div className="form-group">
            <label for="date-of-birth">Date of Birth</label>
            <input type="text" className="form-control" id="date-of-birth"/>
          </div>
          <div className="form-group">
            <label for="phone-number">Phone Number</label>
            <input type="text" className="form-control" id="phone-number"/>
          </div>
          <div className="form-group">
            <label for="adress">Address</label>
            <input type="text" className="form-control" id="adress"/>
          </div>
          <div className="form-group">
            <label for="notes">Notes</label>
            <input type="text" className="form-control" id="notes"/>
          </div>
          <button onClick={this.closeModal} className="btn btn-primary modal-button">Save</button>
        </Modal>
      </div>
    );
  }
}

export default ModalButton;