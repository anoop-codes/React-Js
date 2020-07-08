import React, { Component } from 'react';

class ClickCounterRPCompo extends Component {


    render() {
        return (
            <>
                <button onClick={this.props.incrementCount}>Hover {this.props.count} times</button>
            </>
        );
    }
}

export default ClickCounterRPCompo;