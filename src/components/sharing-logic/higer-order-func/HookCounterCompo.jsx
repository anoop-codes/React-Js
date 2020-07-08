import React from 'react';
import useCounter from '../custom-hooks/useCounter';

const HookCounterCompo = () => {
    const [counter, increment] = useCounter(0);

    return (
        <button onClick={increment}>Hook clicked {counter} times </button>
    );
}

export default HookCounterCompo;