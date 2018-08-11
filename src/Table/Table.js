import React, { Component } from 'react';
import { compose, keys, head, map } from 'ramda';
import './Table.css';

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table className="tbl">
                <caption>Contents of {this.props.selectedValue} Table</caption>
                <thead className="dark">
                    <tr>
                        {
                            compose(
                                map(y => <th>{y}</th>),
                                keys,
                                head)(this.props.items[this.props.selectedValue])
                        }
                    </tr>
                </thead>
                <tbody>
                    {compose(
                        map(x => <tr>
                            {
                                compose(map(y => <td>{x[y]}</td>),
                                    keys,
                                    head)(this.props.items[this.props.selectedValue])
                            }
                        </tr>),
                    )(this.props.items[this.props.selectedValue])}

                </tbody>
            </table>
        );
    }
}