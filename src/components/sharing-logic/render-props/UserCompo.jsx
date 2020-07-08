import React, { Component } from 'react';

class UserCompo extends Component {
    state = {}
    render() {
        return (
            <div>
                Name : {this.props.render(false)}
            </div>
        );
    }
}

export default UserCompo;