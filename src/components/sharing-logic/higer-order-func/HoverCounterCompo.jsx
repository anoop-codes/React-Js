import React, { Component } from 'react';

class HoverCounterCompo extends Component {

    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState(preState => {
            return {
                count: preState.count + 1
            }
        })
    }

    render() {
        return (
            <>
                <button onMouseOver={this.incrementCount}>Hover {this.state.count} times</button>
            </>
        );
    }
}

export default HoverCounterCompo;