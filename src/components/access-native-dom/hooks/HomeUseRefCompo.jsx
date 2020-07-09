import React from 'react';
import FocusInputCompo from './FocusInputCompo';
import ClassTimerCompo from './ClasdTimer';
import HookTimerCompo from './HookTimerCompo';

const HomeUseRefCompo = () => {
    return (
        <>
            <p>Focu input</p>
            <FocusInputCompo />
            <p>Class timer</p>
            <ClassTimerCompo />
            <p>Hook Timer</p>
            <HookTimerCompo />
        </>
    );
}

export default HomeUseRefCompo;

/**
 * useRef : it is used to access DOM node in fucntional Component.
 */
