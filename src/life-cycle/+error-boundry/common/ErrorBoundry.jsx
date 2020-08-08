import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        alert(error)
    }

    render() {
        return (
            <>
                {this.state.hasError ? <span>SomeThing went worng , will fix it shortly</span> : this.props.children}
            </>
        );
    }
}

export default ErrorBoundry;