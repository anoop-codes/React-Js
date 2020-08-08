import React from 'react';
import { useReducer } from 'react';

const initialState = {
    firstCounter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                firstCounter: state.firstCounter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                firstCounter: state.firstCounter - 1
            }
        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

const CounterEx2 = () => {

    //useRedcer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <strong>Count: {state.firstCounter} </strong>
            <br />
            <button className="btn btn-light btn-sm my-2" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button className="btn btn-danger btn-sm mx-2" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button className="btn btn-info btn-sm mx-2" onClick={() => dispatch({ type: "RESET" })}>Rest</button>
        </>
    );
}

export default CounterEx2;