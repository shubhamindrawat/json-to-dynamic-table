import React, { Component } from 'react';
import Table from './Table/Table'
import './App.css';

class App extends Component {

  state = {
    value: ''
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <select onChange={(event) => this.onChange(event)}>
          <option value="">Select An Option</option>
          <option value="Students">Students</option>
          <option value="Employees">Employees</option>
          <option value="Department">Department</option>
        </select>

        {this.state.value.length > 0 && <Table selectedValue={this.state.value} />}
      </div>
    );
  }
}


export default App;
