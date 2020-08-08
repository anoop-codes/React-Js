import React, { Component } from 'react';

class RenderPropsCounter extends Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(preState => {
            return {
                count: preState.count + 1
            }
        })
    }

    render() {
        return (
            <>
                {this.props.render(this.state.count, this.handleClick)}
            </>
        );
    }
}

export default RenderPropsCounter;