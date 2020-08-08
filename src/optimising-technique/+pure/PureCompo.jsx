import React, { PureComponent } from 'react';

class PureCompo extends PureComponent {
    state = {}
    render() {
        console.log('pure component')
        return (
            <>
                PureCompo: {this.props.title}
            </>
        );
    }
}

export default PureCompo;