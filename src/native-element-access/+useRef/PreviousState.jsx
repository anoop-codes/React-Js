import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const PreviousState = () => {

    const [count, setCount] = useState(0);

    const preState = useRef();

    useEffect(() => {
        console.log('useEffect', count)
        preState.current = count;
    }, [count]);

    const prevCount = preState.current;

    console.log('prevCount', prevCount)

    return (
        <>
            count: {count}
            <button className="m-3" onClick={() => setCount(count + 1)}>incement</button>
        </>
    );
}

export default PreviousState;