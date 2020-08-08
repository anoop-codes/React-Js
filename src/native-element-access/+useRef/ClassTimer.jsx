import React, { Component } from 'react';

class ClassTimer extends Component {
    interval = null;

    state = {
        timer: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(preState => {
                return {
                    timer: preState.timer + 1
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <>
                Class timer : {this.state.timer}
                <button className="btn btn-sm btn-light m-3" onClick={() => clearInterval(this.interval)}>clearInterval</button>
            </>
        );
    }
}

export default ClassTimer;