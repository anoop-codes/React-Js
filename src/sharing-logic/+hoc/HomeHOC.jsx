import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

const HomeHOC = () => {
    return (
        <>
            <ClickCounter name="anoop kumar" />
            <HoverCounter />
        </>
    );
}

export default HomeHOC;