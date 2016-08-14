import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Table extends Component {

  constructor(props) {

    super(props)

    this.fakedata = [
     {
        "id": 0,
        "First Name": "Mayer",
        "Last Name": "Kapowsin",
        "Date of Birth": "1/1/1980",
        "Phone Number": "212-222-3333",
        "Address": "123 Whatever Lane",
        "Notes": "Fake Notes"
      }
    ]
  }
 
  render () {
    return (
      <Griddle results={this.fakedata} tableClassName="table" showFilter={true} showSettings={true} 
      columns={["First Name", "Last Name", "Date of Birth", "Phone Number", "Address", "Notes"]}/>
    )
  }
}

export default Table;