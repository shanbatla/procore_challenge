import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Table extends Component {

  constructor(props) {

    super(props)

    this.fakedata = [
     {
        "id": 0,
        "firstName": "Mayer",
        "lastName": "Kapowsin",
        "dateOfBirth": "1/1/1980",
        "phoneNumber": "212-222-3333",
        "address": "123 Whatever Lane",
        "notes": "Fake notes"
      }
    ]
  }
 
  render () {
    return (
      <Griddle results={this.fakedata} tableClassName="table" showFilter={true} showSettings={true} 
      columns={["firstName", "lastName", "dateOfBirth", "phoneNumber", "address", "notes"]}/>
    )
  }
}

export default Table;