import React, { Component } from 'react';

class ClassCounterEx1 extends Component {
    state = {
        count: 0
    }

    handleInc = () => {
        this.setState(preState => {
            return {
                count: preState.count + 1
            }
        })
    }
    render() {
        return (
            <>
                <h5>Class counter :</h5>
                <div>count : {this.state.count}</div>
                <button className="btn-sm" onClick={this.handleInc}>increment</button>
            </ >
        );
    }
}

/**
 * ---important---
 * 
 * if working with the premitive data , update the state with the previous value
 *      like :
 *      this.setState(preState => {
            return {
                count: preState.count + 1
            }
        })
 */

export default ClassCounterEx1;