import React, { useContext } from 'react';
import { counterContext } from './HomewithUseContext';

const ComponentF = () => {

    const { count, dispatch } = useContext(counterContext);

    return (
        <>
            <button onClick={() => dispatch('INCREMENT')}>compoF inc count {count}</button>
        </>
    );
}

export default ComponentF;