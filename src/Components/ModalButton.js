import React, { Component } from 'react';
import '../App.css';

class ModalButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary modal-button">+ Contacts Keeper</button>
      </div>
    );
  }
}

export default ModalButton;