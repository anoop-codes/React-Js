import React, { Component } from 'react';

class ClassChild extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        console.log('-----Child Constructor is called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('-----Child getDerivedStateFromProps', props, state);
        return null
    }

    componentDidMount() {
        //called only once
        console.log('-----Child componentDidMount is called')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('-----Child componentDidUpdate is called', prevProps, prevState)
    }

    render() {
        console.log('-----Child Render is called')
        return (
            <>
            </>
        );
    }
}

export default ClassChild;