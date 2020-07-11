import React, { Component } from 'react';

class ChildComponent extends Component {
    state = {
        count: 0
    }
    constructor() {
        super()
        console.log('--------constructor child component----------')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('--------getDerivedStateFromProps child component----------')
        return null;
    }

    componentDidMount() {
        console.log('--------componentDidMount child component----------')
    }

    render() {
        console.log('--------render child component----------')
        return (
            <>
            </>
        );
    }
}

export default ChildComponent;