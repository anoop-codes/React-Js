import React, { Component } from 'react';

class MoviesDetaislPage extends Component {
    state = {}
    render() {
        return (
            <>
                id : {this.props.match.params.id}
            </>
        );
    }
}

export default MoviesDetaislPage;