import React, { Component } from 'react';
import ClassChild from './ClassChild';

class ClassParent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            points: 0
        }
        // this.handlePoints = this.handlePoints.bind(this)

        console.log('Parent Constructor is called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps', props, state);
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Parent shouldComponentUpdate', nextProps, nextState)
        if (nextState.points !== this.state.points) {
            return true
        }
    }

    componentDidMount() {
        //called only once
        console.log('Parent componentDidMount is called')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Parent componentDidUpdate is called', prevProps, prevState)
    }

    inCrement = () => {
        this.setState({
            points: this.state.points + 1
        })
    }

    render() {
        console.log('Parent Render is called')
        return (
            <>
                <ClassChild points={this.state.points} />
                <button onClick={this.inCrement}>updates</button>
            </>
        );
    }
}

export default ClassParent;