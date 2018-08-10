import React, { Component } from 'react';
import { compose, keys, head, map } from 'ramda';
import './Table.css';

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {
                'Students': [
                    { Name: 'Louise', Age: 27, Color: 'red'},
                    { Name: 'Margaret', Age: 15, Color: 'blue'},
                    { Name: 'Lisa', Age: 34, Color: 'yellow'}
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
            }
        }
    }
    render() {
        return (
            <table className="tbl">
                <thead className="dark">
                    <tr>
                        {
                            compose(
                                map(y => <th>{y}</th>),
                                keys,
                                head)(this.state.items[this.props.selectedValue])
                        }
                    </tr>
                </thead>
                <tbody>
                    {compose(
                        map(x => <tr>
                            {
                                compose(map(y => <td>{x[y]}</td>),
                                    keys,
                                    head)(this.state.items[this.props.selectedValue])
                            }
                        </tr>),
                    )(this.state.items[this.props.selectedValue])}

                </tbody>
            </table>
        );
    }
}