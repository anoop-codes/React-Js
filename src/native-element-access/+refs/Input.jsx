import React, { Component } from 'react';

class Input extends Component {
    state = {}

    inputRef = React.createRef();

    focusMethod() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" ref={this.inputRef} />
                </div>
            </>
        );
    }
}

export default Input;