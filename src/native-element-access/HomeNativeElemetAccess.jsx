import React from 'react';
import RefsCompo from './+refs/RefsCompo';
import InputParent from './+refs/InputParent';
import FRParentInput from './+forwardRef/FRParentInput';
import FocusInput from './+useRef/FocusInput';
import ClassTimer from './+useRef/ClassTimer';
import HookTimer from './+useRef/HookTimer';
import PreviousState from './+useRef/PreviousState';

const HomeNativeElemetAccess = () => {
    return (
        <>
            <ClassTimer />
            <HookTimer />
            <PreviousState />
        </>
    );
}

export default HomeNativeElemetAccess;