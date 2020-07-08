import React, { PureComponent } from 'react';

class PureCompo extends PureComponent {
    state = {}

    render() {
        console.log('Pure Called')
        return (
            <>
                <span>pure compo name :{this.props.name}</span>
            </>
        );
    }
}

export default PureCompo;