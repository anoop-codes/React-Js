import React from 'react';
import ClassCounterCompo from './ClassCounterCompo';
import HookCounterCompo from './HookCounterCompo';
const HomeUseEffectHome = () => {
    return (
        <>
            <p>Class Counter</p>
            <ClassCounterCompo />
            <p>hook counter</p>
            <HookCounterCompo />
        </>
    );
}

/**
 * the useEffect hook let us perform side effect in functional component.
 * 
 * it is a close replacement for componentDidmount , componentDidupdate and componentwillUnMount
 */

export default HomeUseEffectHome;
