import React, { Component } from 'react';
import ParentComponent from './ParentComponent';

class HomeLifeCycleCompo extends Component {
    state = {
        count: 0
    }

    constructor() {
        super()
        /**
         * a function is called when the new instance of the component is created.
         * it is used for state initialziation
         * -we can dircetly change the state , without setState
         * binding the event handler
         * no side effect(like http call..)
         */
    }

    static getDerivedStateFromProps(props, state) {
        /**
         * rarely used life cycle hook
         * 
         * when the state of the component is based on the props passed over the time.
         * static method : it has no access to "this" key word
         * 
         * return a  new state obj
         * no side effect(like http call..)
         */

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    getSnapshotBeforeUpdate(preProps, preState) {
        /**
         * called after the changes reflected into the real dom form the virtual dom
         * 
         * Capture info form the dom
         * --like help to maintain the scroll position on re-render
         * 
         * method return a null or a value ,returned value will be passed as the third parameter to the next method
         */
    }

    componentDidUpdate(preProps, preState, snapShot) {
        /**
         * called after the render is finsihed in the re-render lifecycle
         * 
         * called only once
         * 
         * also side effect
         */
    }

    componentDidMount() {
        /**
         * it is called only once , in the whole lifecycle of the component.
         * it is called after the renderMethod
         * side effects are allowed
         */
    }

    render() {
        /**
         * required method of a class component
         * return jsx
         * it's a pure component , dont't change the state/props of the component
         * no side effect(like http call..)
         * 
         * after the render method of the children , the lifecycle hook of a child component is exe.
         */
        return (
            <>
                {/* <ParentComponent /> */}
            </>
        );
    }
}

export default HomeLifeCycleCompo;

/**
 * the life cycle hook exist in class component
 * it has 4 phase
 *
 *  1)mounthing
 *      -when the instance of the component is created and inserted into the DOM
 *         it has 4 method
 *              -constrcutor
 *(rarely used) -getDerivedStateFromProps()
 *              -render() // this is the required, life cycle hook of a class component
 *              -componentDidMount() //for
 *
 *  2)updating
 *      - whan a component is re-rendered whene there is change in it's props or state
 *      (rarely used) -getDerivedStateFromProps()
 *      (rarely used)  -shouldComponentUpdate()
 *                      -render()
 *       (rarely used)  -getSnapshotBeforeUpdate
 *                      -componentDidUpdate()
 *
 *  3)unmuting
 *      - removing the component from the DOM , unsubscribing the resouces
 *             -it has only one method
 *                  componentWillUnmount
 *
 *  4)errorhandling
 *      - it is called when there is error in rendering , in a lifeCycle method or the constructor the child component.
 *
 *
 * 17.0: Remove componentWillMount, componentWillReceiveProps, and componentWillUpdate . (Only the new “UNSAFE_” lifecycle names will work from this point forward.)
 */