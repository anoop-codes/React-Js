import React, { Component } from 'react';

class RegularCompo extends Component {
    state = {}
    render() {
        console.log(' Regular Called ');
        return (
            <>
                <span>regular compo name : {this.props.name}</span>
            </>
        );
    }
}

export default RegularCompo;