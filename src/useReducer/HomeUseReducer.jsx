import React from 'react';
import CounterEx1 from './components/CounterEx1';
import CounterEx2 from './components/CounterEx2';
import CounterEx3 from './components/CounterEx3';

const HomeUseReducer = () => {
    return (
        <>
            <CounterEx1 />

            <h3>state as obj</h3>
            <CounterEx2 />
            <h3>multiple reducer</h3>
            <CounterEx3 />
        </>
    );
}

export default HomeUseReducer;