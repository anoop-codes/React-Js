import React, { Component } from 'react';

class ClassTimerCompo extends Component {

    state = {
        timer: 0
    }

    interVal;
    componentDidMount() {
        this.interVal = setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interVal)
    }


    clearTimer = () => {
        clearInterval(this.interVal)
    }

    render() {
        return (
            <>
                <div> {this.state.timer}</div>
                <button onClick={this.clearTimer}>clear timer</button>
            </>
        );
    }
}

export default ClassTimerCompo;