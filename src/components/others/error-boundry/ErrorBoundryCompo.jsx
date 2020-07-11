import React, { Component } from 'react';

class ErrorBoundryCompo extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log('info----->', info)
    }

    render() {
        return (
            <>
                <div>
                    {this.state.hasError ? <h3>Something went Wrong </h3> : this.props.children}
                </div>
            </>
        );
    }
}

export default ErrorBoundryCompo;