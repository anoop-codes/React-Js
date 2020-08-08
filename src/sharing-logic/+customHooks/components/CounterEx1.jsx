import React from 'react';
import useCounter from '../hooks/useCounter';

const CounterEx1 = () => {

    const [count, Increment, decrement, reset] = useCounter(1, 3);

    return (
        <>
            <strong>Counter-1 :</strong> {count}
            <button className="btn btn-light btn-sm m-3" onClick={Increment}>Increment</button>
            <button className="btn btn-light btn-sm m-3" onClick={decrement}>Decrement</button>
            <button className="btn btn-light btn-sm m-3" onClick={reset}>reset</button>
        </>
    );
}

export default CounterEx1;
