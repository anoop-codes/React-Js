import React, { Component } from 'react';

class ClassCounterCompo extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        document.title = this.state.count;
    }

    componentDidUpdate(preProps, preState) {
        if (preState.count !== this.state.count) {
            document.title = this.state.count;
        }
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>change the count</button>
            </>
        );
    }
}

export default ClassCounterCompo;