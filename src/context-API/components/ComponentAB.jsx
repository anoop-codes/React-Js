import React from 'react';
import ComponentABC from './ComponentABC';
import { Component } from 'react';

class ComponentAB extends Component {

    render() {
        return (
            <>
                <ComponentABC />
            </>
        );
    }
}


export default ComponentAB;

//2 way to consume the context but only work on class component and can only have one subcribtion
/**
 * static contextType = contextName;
 *
 * accessing : {this.context}
 */
