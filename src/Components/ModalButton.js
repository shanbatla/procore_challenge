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
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalButton;