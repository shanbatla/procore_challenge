import React, { Component } from 'react';
import Modal from 'react-modal';
import '../App.css';

class ModalButton extends Component {
  
  constructor(props) {
    super(props);
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.justCloseModal = this.justCloseModal.bind(this);
    
    this.state = {
      open: false,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      address: '',
      notes: ''
    };
  }

  openModal() {
    this.setState({
      open: true
    }); 
  }

  closeModal() {
    const formData = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      dateOfBirth: this.refs.dateOfBirth.value,
      phoneNumber: this.refs.phoneNumber.value,
      address: this.refs.address.value,
      notes: this.refs.notes.value
    };

    if(formData.firstName && formData.lastName && formData.dateOfBirth && formData.phoneNumber && formData.address && formData.notes) {
      this.props.setFormData(formData);
      this.setState({
        open: false
      });      
    } else {
      alert('Please enter valid data.');
    }
  }

  justCloseModal() {
    this.setState({
      open: false
    });
  }

  render() {
    
    return (
      <div className="center">
        <button onClick={this.openModal} type="button" className="btn btn-primary modal-button">+ Contacts Keeper</button>
        <Modal isOpen={this.state.open}>
          
          <div className="modal-header">
            Contacts Keeper
            <button id="close-button" onClick={this.justCloseModal}>
              x
            </button>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" className="form-control" ref="firstName"/>
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" className="form-control" ref="lastName"/>
            </div>
            <div className="form-group">
              <label htmlFor="date-of-birth">Date of Birth</label>
              <input type="text" className="form-control" ref="dateOfBirth"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="text" className="form-control" ref="phoneNumber"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" ref="address"/>
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <input type="text" className="form-control" ref="notes"/>
            </div>
          </form>

          <button onClick={this.closeModal} className="btn btn-primary modal-button" id="save-button" type="submit">Save</button>
        </Modal>
      </div>
    );
  }
};

export default ModalButton;