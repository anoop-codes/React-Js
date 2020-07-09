import React, { Component } from 'react';

class InputCompo extends Component {
    state = {}

    inputRefChild = React.createRef()

    focusChildInput = () => {
        this.inputRefChild.current.focus();
    }

    render() {
        return (
            <input ref={this.inputRefChild} />
        );
    }
}

export default InputCompo;
