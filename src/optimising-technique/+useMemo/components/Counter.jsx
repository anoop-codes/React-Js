import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = () => {
        setCounterOne(preState => preState + 1);
    }

    const IncrementTwo = () => {
        setCounterTwo(preState => preState + 1);
    }


    //useMemo
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return (counterOne % 2 === 0);
    }, [counterOne]);


    return (
        <>
            <button className="btn btn-sm btn-light" onClick={IncrementOne}>Counter 1 : {counterOne} <span>{isEven ? 'Even' : 'Odd'}</span></button>
            <br />
            <br />
            <br />

            <button className="btn btn-sm btn-light" onClick={IncrementTwo}>Counter 2 : {counterTwo}</button>
        </>
    );
}

/**
 * every time the state update the component re-renders.
 * 
 * useMemo : is way to tell react not to calaculate the value unnessarry , when they are not changed
 */

export default Counter;