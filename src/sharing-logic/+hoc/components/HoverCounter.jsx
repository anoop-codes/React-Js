import React, { Component } from 'react';
import withCounter from '../common/withCounter';

class HoverCounter extends Component {

    render() {
        return (
            <>
                <button className="btn btn-light btn-sm m-3" onMouseOver={this.props.onIncrement} >Hover {this.props.count} times</button>
            </>
        );
    }
}

export default withCounter(HoverCounter);