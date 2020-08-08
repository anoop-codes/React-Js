import React, { Component } from 'react';
import withCounter from '../common/withCounter';

class ClickCounter extends Component {

    render() {
        return (
            <>
                <button className="btn btn-light btn-sm m-3" onClick={this.props.onIncrement} >Clicked {this.props.count} times</button>
            </>
        );
    }
}

export default withCounter(ClickCounter, 4);