import React, { Component } from 'react';
import InputCompo from './InputCompo';

class ParentInputCompo extends Component {
    state = {}

    parentRef = React.createRef();

    handleFocus = () => {
        console.log(this.parentRef);
        this.parentRef.current.focusChildInput()
    }

    render() {
        return (
            <div>
                {/* ref can only be attach to a functional compo, if we want to access it property from 
                parent component */}
                <InputCompo ref={this.parentRef} />
                <button onClick={this.handleFocus} >Focus child</button>
            </div>
        );
    }
}

export default ParentInputCompo;
/**
 * ref , we get the reference to the child functin and state throug ref
 *
 * important : ref cann't be attach to a functional component.
 */