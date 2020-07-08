import React, { Fragment, useReducer } from 'react';

//using useReducer state can be a primitive value also but in redux we need to have state as obj.
const intialStateCounter = 0


function reducerCounter(state = intialStateCounter, action) {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return intialStateCounter;
        default:
            return state;
    }
}


const CounterCompoEx1 = () => {
    /**
     * useReducer is also a function
     * 
     * useReucer take 2 arguments (intialState and reducer fun)
     */

    const [state, dispatch] = useReducer(reducerCounter, intialStateCounter);

    return (
        <Fragment>
            <div>counter : {state}</div>
            <button onClick={() => dispatch('INCREMENT')}>increment</button>
            <button onClick={() => dispatch('DECREMENT')}>decrement</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
        </Fragment>
    );
}

export default CounterCompoEx1;