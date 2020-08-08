import React from 'react';
import ComponentA from './components/ComponentA';
import ErrorBoundry from './common/ErrorBoundry';

const HomeErrorBoundry = () => {
    return (
        <>
            <ErrorBoundry>
                <ComponentA name="joker" />
            </ErrorBoundry>
            <br></br>
            <ComponentA name="Shaktiman " />
        </>
    );
}

export default HomeErrorBoundry;

