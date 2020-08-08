import React, { Component } from 'react';

class ClickCounter extends Component {

    render() {
        return (
            <>
                <button className="btn btn-light btn-sm m-3" onClick={this.props.onIncrement} >Clicked {this.props.state} times</button>
            </>
        );
    }
}

export default ClickCounter;