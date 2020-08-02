import React, { Component } from 'react';
import Counters from './components/Counters';

class HomeCounter extends Component {
    state = {}
    render() {
        return (
            <>
                <Counters />
            </>
        );
    }
}

export default HomeCounter;