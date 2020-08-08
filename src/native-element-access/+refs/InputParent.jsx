import React, { Component } from 'react';
import Input from './Input';

class InputParent extends Component {
    state = {}

    componentRef = React.createRef();

    handleFocus = () => {
        this.componentRef.current.focusMethod()
    }

    render() {
        return (
            <>
                <Input ref={this.componentRef} />
                <button className="btn btn-sm btn-light" onClick={this.handleFocus}>Focus</button>
            </>
        );
    }
}

export default InputParent;