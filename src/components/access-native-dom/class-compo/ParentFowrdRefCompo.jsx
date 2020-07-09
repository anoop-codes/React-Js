import React, { Component } from 'react';
import FowrdRefCompo from './FowrdRefCompo';

class ParentFowrdRefCompo extends Component {
    state = {}

    inputfrwdref = React.createRef();

    handleFocus = () => {
        this.inputfrwdref.current.focus()
    }

    render() {
        return (
            <div>
                <FowrdRefCompo ref={this.inputfrwdref} />
                <button onClick={this.handleFocus}>Frwd Focus</button>
            </div>
        );
    }
}

export default ParentFowrdRefCompo;

/**
 * Function components cannot be given refs.
 *
 * forwarding ref is a technique for automaticlly forwading a ref , through a component to one of it's childern,
 *
 * through frwRef we can ass the property and dom of functional component
 */