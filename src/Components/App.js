import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import ModalButton from './ModalButton'
import '../App.css';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      fieldVals: {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        phoneNumber: null,
        address: null,
        notes: null
      }
    }
  }

  onChange() {
    
  }

  render() {
    return (
      <div>
        <Header/>
        <ModalButton/>
        <Table/>
      </div>
    );
  }
}

export default App;
