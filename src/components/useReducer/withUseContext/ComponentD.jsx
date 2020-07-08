import React, { useContext } from 'react';
import { counterContext } from './HomewithUseContext';

const ComponentD = () => {

    const { count, dispatch } = useContext(counterContext);
    return (
        <>
            <button onClick={() => dispatch('DECREMENT')}>compoD dec count {count}</button>
        </>
    );
}

export default ComponentD;