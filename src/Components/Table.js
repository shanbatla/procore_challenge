import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Table extends Component {

  constructor(props) {
    super(props);

    this.columns = ["First Name", "Last Name", "Date of Birth", "Phone Number", "Address", "Notes"];

    this.state = {
      contacts: []
    }
  }
 
  render() {
    
    this.state.contacts.push(this.props.contact);
    console.log(this.state.contacts);

    return (
      <Griddle 
        results={this.state.contacts} 
        tableClassName="table" 
        showFilter={true} 
        showSettings={false} 
        columns={this.columns} 
        showPager={false} 
        filterPlaceholderText={"Search"}/>
    )
  }
}

export default Table;