import React, { Component } from 'react';

class HoverCounter extends Component {

    render() {
        return (
            <>
                <button className="btn btn-light btn-sm m-3" onMouseOver={this.props.onIncrement} >Hover {this.props.state} times</button>
            </>
        );
    }
}

export default HoverCounter;