import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Table extends Component {

  constructor(props) {
    super(props);
    
    this.columns = [
      "First Name", 
      "Last Name", 
      "Date of Birth", 
      "Phone Number", 
      "Address", 
      "Notes"
    ];

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    this.state.contacts.pop();
  }
 
  render() {
    this.state.contacts.push(this.props.contact);

    return (
      <div className="center">
        <Griddle 
          results={this.state.contacts} 
          tableClassName="table" 
          showFilter={true} 
          showSettings={false} 
          columns={this.columns} 
          showPager={false} 
          filterPlaceholderText={"Search"}/>
        </div>
    );
  }
};

export default Table;