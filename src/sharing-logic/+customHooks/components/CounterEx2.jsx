import React from 'react';
import useCounter from '../hooks/useCounter';


const CounterEx2 = () => {

    const [count, Increment, decrement, reset] = useCounter(0, 10);

    return (
        <>
            <strong>Counter-2 :</strong> {count}
            <button className="btn btn-light btn-sm m-3" onClick={Increment}>Increment</button>
            <button className="btn btn-light btn-sm m-3" onClick={decrement}>Decrement</button>
            <button className="btn btn-light btn-sm m-3" onClick={reset}>reset</button>
        </>
    );
}

export default CounterEx2;
