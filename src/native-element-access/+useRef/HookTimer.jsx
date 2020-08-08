import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const HookTimer = () => {
    const [timer, setTimer] = useState(0);

    //used to store any mutable value, the value will persist throught the re-render
    //can also be used to store the previous value
    let interval = useRef(null);


    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer(preState => preState + 1);
        }, 1000);

        return () => {
            //component will unMount
            clearInterval(interval.current)
        }
    }, []);

    return (
        <div>
            Hook timer : {timer}
            <button className="btn btn-sm btn-light m-3" onClick={() => clearInterval(interval.current)}>clearInterval</button>
        </div>
    );
}

export default HookTimer;