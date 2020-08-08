import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    state = {}

    componentRef = React.createRef();

    handleFocus = () => {
        this.componentRef.current.focus();
    }

    render() {
        return (
            <>
                <FRInput ref={this.componentRef} />
                <button className="btn btn-sm btn-light" onClick={this.handleFocus}>Focus</button>
            </>
        );
    }
}

export default FRParentInput;