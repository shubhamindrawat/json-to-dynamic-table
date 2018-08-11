import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown'
import Table from './Table/Table'

class App extends Component {
  state = {
    value: '',
    items: {
      'Students': [
        { Name: 'Louise', Age: 27, Color: 'red' },
        { Name: 'Margaret', Age: 15, Color: 'blue' },
        { Name: 'Lisa', Age: 34, Color: 'yellow' }
      ],
      'Employees': [
        { 'Emp No': 'E101', 'Emp Name': 'Shubham', Salary: 20000, Role: 'Web Development' },
        { 'Emp No': 'E102', 'Emp Name': 'Mehul', Salary: 20000, Role: 'Java Developer' },
        { 'Emp No': 'E103', 'Emp Name': 'Chirag', Salary: 20000, Role: 'Android Developer' },
      ],
      'Department': [
        { 'Dept No': 'D101', 'Dept Name': 'Sales' },
        { 'Dept No': 'D102', 'Dept Name': 'Purchase' },
        { 'Dept No': 'D103', 'Dept Name': 'Marketting' }
      ]
    },
    options: [
      { value: 'Students', option: 'Students' },
      { value: 'Employees', option: 'Employees' },
      { value: 'Department', option: 'Department' }
    ]
  }

  updateValue = (e) => {
    this.setState({ value: e.target.value });
  }

  getValue = () =>{
    return this.getState();
  }

    render() {
  return (
    <div className="container">
      <Dropdown options={this.state.options} onChange={(e) => this.updateValue(e)} getValue={this.getValue} />
      {this.state.value.length > 0 && <Table selectedValue={this.state.value} items={this.state.items} options={this.state.options} />}
    </div>
  );
}
}


export default App;
