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


const CounterCompoEx3 = () => {
    /**
     * useReducer is also a function
     * 
     * useReucer take 2 arguments (intialState and reducer fun)
     * 
     * through useReducer we can have multiple independ state
     */

    const [state, dispatch] = useReducer(reducerCounter, intialStateCounter);
    const [state2, dispatch2] = useReducer(reducerCounter, intialStateCounter);

    return (
        <Fragment>
            <div>counter : {state}</div>
            <button onClick={() => dispatch('INCREMENT')}>increment</button>
            <button onClick={() => dispatch('DECREMENT')}>decrement</button>
            <button onClick={() => dispatch('RESET')}>reset</button>
            <br />
            <br />
            <div>counter2 : {state2}</div>
            <button onClick={() => dispatch2('INCREMENT')}>increment</button>
            <button onClick={() => dispatch2('DECREMENT')}>decrement</button>
            <button onClick={() => dispatch2('RESET')}>reset</button>
        </Fragment>
    );
}

export default CounterCompoEx3;