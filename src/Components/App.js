import React, { Component } from 'react';
import Header from './Header'
import Table from './Table'
import ModalButton from './ModalButton'
import '../App.css';

class App extends Component {
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
