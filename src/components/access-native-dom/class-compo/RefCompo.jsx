import React, { Component, createRef } from 'react';


class RefCompo extends Component {
    state = {}
    //firs set create the ref 
    inputRef = createRef();

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
            </>
        );
    }
}

export default RefCompo;