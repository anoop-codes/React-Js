import React, { Component } from 'react';
import PureCompo from './PureCompo';
import RegularCompo from './RegularCompo';
import MemoCompo from '../+memo/MemoCompo';

class ParentCompo extends Component {
    state = {
        title: 'anoop'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                title: 'anoop'
            })
        }, 2000)
    }

    render() {
        return (
            <>
                <PureCompo title={this.state.title} />
                <br />
                <RegularCompo title={this.state.title} />
                <br />
                <MemoCompo title={this.state.title} />
            </>
        );
    }
}

export default ParentCompo;