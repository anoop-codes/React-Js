import { useState } from 'react';

const useCounter = (intialState = 0) => {

    const [counter, setCounter] = useState(intialState)

    const increment = () => {
        setCounter(counter + 1)
    }

    return [counter, increment]
}

export default useCounter;