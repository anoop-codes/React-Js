import React, { Component } from 'react';

class UserCompo extends Component {
    state = {}
    render() {
        return (
            <div className="m-2">
                Name: {this.props.render(false)}
            </div>
        );
    }
}

export default UserCompo;