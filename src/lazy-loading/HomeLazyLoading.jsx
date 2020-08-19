import React, { Component, lazy, Suspense } from 'react';

const MyComponent = lazy(() => import('./components/MyComponent'))

class HomeLazyLoading extends Component {
    state = {}
    render() {
        return (
            <>
                <div>Load this component first ... and lazy load the other</div>
                <Suspense fallback={<div> Loading......</div>}>
                    <MyComponent />
                </Suspense>
            </>
        );
    }
}

export default HomeLazyLoading;

/**
 * Suspence : it has props called fallback ui...
 */