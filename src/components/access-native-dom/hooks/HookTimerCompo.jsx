import React, { useState, useEffect, useRef } from 'react';

const HookTimerCompo = () => {

    const timerInterval = useRef(null)

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        timerInterval.current = setInterval(() => {
            setTimer(timer + 1)
        }, 1000);

        return () => {
            clearInterval(timerInterval.current);
        }
    }, [timer]);

    return (
        <>
            {timer}
            <button onClick={() => clearInterval(timerInterval.current)}>hook Clear timer</button>
        </>
    );
}

export default HookTimerCompo;

/**
 *
 * important
 *
 * useRef is also help us to make a public veraible in a functional compnnet. like the instance member of the class compoenet.
 *
 * useRef hold the reference to a value of the dom node ,it can also be used to store any mutable value
 * the value will persist thorug the render , while also not casuing no side effect.
 */