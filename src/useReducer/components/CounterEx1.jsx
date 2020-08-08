import React from 'react';
import { useReducer } from 'react';

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const CounterEx1 = () => {

    //useRedcer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <strong>Count: {state} </strong>
            <br />
            <button className="btn btn-light btn-sm my-2" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button className="btn btn-danger btn-sm mx-2" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button className="btn btn-info btn-sm mx-2" onClick={() => dispatch({ type: "RESET" })}>Rest</button>
        </>
    );
}

export default CounterEx1;