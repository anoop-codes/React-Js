import React, { Component } from 'react';

const withCounterHoc = (OriginalComponent) => {

    class Counter extends Component {

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
            return <OriginalComponent name="anoop kumar" increment={this.incrementCount} count={this.state.count} {...this.props} />
        }

    }

    return Counter;
}

export default withCounterHoc;