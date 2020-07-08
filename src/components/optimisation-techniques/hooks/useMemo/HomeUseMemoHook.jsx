import React, { useState, useMemo } from 'react';

const HomeUseMemoHook = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = () => {
        setCounter1(counter1 + 1);
    }

    const increment2 = () => {
        setCounter2(counter2 + 1);
    }

    /**
     * if we are getting data or calc something which is taking time, it will slow the whole UI redering when 
     * when it is not callled.
     * 
     * so useMemo , help to avoid heavy calc on every render. it basiclly return the cached value. when not called.
     * 
     * recomputing is avoid with useMemo
     * 
     * 
     * if we need to cache as func useCallback , when we need to cache the result of invoked func use useMemo
     */
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return (counter1 % 2 === 0)
    }, [counter1])


    return (
        <>
            <button onClick={increment1}>count1-{counter1}</button> <span>{isEven ? 'Even' : 'odd'}</span><br />
            <button onClick={increment2}>count2-{counter2}</button>
        </>
    );
}

export default HomeUseMemoHook;
