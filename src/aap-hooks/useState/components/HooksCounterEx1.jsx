import React from 'react';
import { useState } from 'react';

const HooksCounterEx1 = () => {

    const [count, setCount] = useState(0);

    /**
     * useState : a basiclly function, it have intialivalue and return , the current value and the methos to 
     * update the value 
     */

    const handleIncrement = () => {
        setCount(prestate => prestate + 1)
    }

    return (
        <>
            <h5>hook counter :</h5>
            <div>count : {count}</div>
            <button className="btn-sm" onClick={handleIncrement}>increment</button>
        </>
    );
}

export default HooksCounterEx1;