import React, { Component } from 'react';

class CounterRenderPropsCompo extends Component {

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
                {this.props.render(this.state.count, this.incrementCount)}
            </>
        );
    }
}

export default CounterRenderPropsCompo;