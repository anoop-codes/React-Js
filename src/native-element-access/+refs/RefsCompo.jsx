import React, { Component } from 'react';

class RefsCompo extends Component {
    state = {}

    inputRef = React.createRef();

    componentDidMount() {
        //we can direclty access the DOM property like focus etc...
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

export default RefsCompo;