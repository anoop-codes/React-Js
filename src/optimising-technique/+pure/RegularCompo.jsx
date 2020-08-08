import React, { Component } from 'react';

class RegularCompo extends Component {
    state = {}
    render() {
        console.log('Regular component')
        return (
            <>
                RegularCompo: {this.props.title}
            </>
        );
    }
}

export default RegularCompo;