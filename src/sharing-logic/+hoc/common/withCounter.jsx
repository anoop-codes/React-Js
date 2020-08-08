import React, { Component } from 'react';

const withCounter = (WrappedComponent, byAmount = 1) => {

    class WithCounter extends Component {
        state = {
            count: 0
        }
        handleClick = () => {
            this.setState(preState => {
                return {
                    count: preState.count + byAmount
                }
            })
        }
        render() {
            return <WrappedComponent count={this.state.count} onIncrement={this.handleClick} {...this.props} />
        }
    }

    return WithCounter;
}

export default withCounter;