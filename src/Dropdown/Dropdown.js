import React, { Component } from 'react';
import { compose, map } from 'ramda';
import './Dropdown.css'

export default class Dropdown extends Component {

    state = {
        value: ''
    }

    render() {
        return (
            <select onChange={this.props.onChange}>
                <option value="">Select An Option</option>
                {compose(
                    map(x => <option value={x.value} > {x.option} </option>)
                )(this.props.options)}}
            </select>
        );
    }
}