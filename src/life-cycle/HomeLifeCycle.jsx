import React from 'react';
import ClassParent from './components/ClassParent';
import HomeErrorBoundry from './+error-boundry/HomeErrorBoundry';

const HomeLifeCycle = () => {
    return (
        <>
            <HomeErrorBoundry />
        </>
    );
}

export default HomeLifeCycle;