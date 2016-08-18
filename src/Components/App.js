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

  onChange(value) {
    this.setState({
      firstName: value.firstName,
      lastName: value.lastName,
      dateOfBirth: value.dateOfBirth,
      phoneNumber: value.phoneNumber,
      address: value.address,
      notes: value.notes
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <ModalButton onChange={this.onChange.bind(this)}/>
        <Table contact={this.state}/>
      </div>
    );
  }
}

export default App;
