import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    state = {
        count: 0
    }
    constructor() {
        super();
        console.log('--------constructor Parent component----------')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('--------getDerivedStateFromProps Parent component----------')

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('--------shouldComponentUpdate Parent component----------')

        return true;
    }


    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('--------getSnapshotBeforeUpdate Parent component----------')
    }


    componentDidMount() {
        console.log('--------componentDidMount Parent component----------')
    }

    componentDidUpdate(preProps, preState, snapShot) {
        console.log('--------componentDidUpdate Parent component----------')
    }


    render() {
        console.log('--------render Parent component----------')
        return (
            <>
                <ChildComponent />
            </>);
    }
}



export default ParentComponent;