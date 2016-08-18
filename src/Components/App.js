import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import ModalButton from './ModalButton'
import '../App.css';

class App extends Component {
  
  constructor(props) {
    super(props)

    // this.state = {
    //   firstName: '',
    //   lastName: '',
    //   dateOfBirth: '',
    //   phoneNumber: '',
    //   address: '',
    //   notes: ''
    // }

    this.state = {
      "First Name": '',
      "Last Name": '',
      "Date of Birth": '',
      "Phone Number": '',
      "Address": '',
      "Notes": ''
    }
  }

  setFormData(form) {
    this.setState({
      "First Name": form.firstName,
      "Last Name": form.lastName,
      "Date of Birth": form.dateOfBirth,
      "Phone Number": form.phoneNumber,
      "Address": form.address,
      "Notes": form.notes
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
