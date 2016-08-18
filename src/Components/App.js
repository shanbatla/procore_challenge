import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import ModalButton from './ModalButton'
import '../App.css';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      address: '',
      notes: ''
    }
  }

  setFormData(form) {
    this.setState({
      firstName: form.firstName,
      lastName: form.lastName,
      dateOfBirth: form.dateOfBirth,
      phoneNumber: form.phoneNumber,
      address: form.address,
      notes: form.notes
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <ModalButton setFormData={this.setFormData.bind(this)}/>
        <Table contact={this.state}/>
      </div>
    );
  }
}

export default App;
