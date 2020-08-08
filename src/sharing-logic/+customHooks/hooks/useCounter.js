import { useState } from 'react';

const useCounter = (initalState = 0, byAmount = 1) => {
    const [count, setCount] = useState(initalState);

    const Increment = () => {
        setCount(prevState => prevState + byAmount)
    }

    const decrement = () => {
        setCount(prevState => prevState - byAmount)
    }

    const reset = () => {
        setCount(0)
    }

    return [count, Increment, decrement, reset]
}

export default useCounter;