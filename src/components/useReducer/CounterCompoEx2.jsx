import React, { Fragment, useReducer } from 'react';

//using useReducer state can be a primitive value also but in redux we need to have state as obj.
const intialStateCounter = {
    firstCounter: 0
}


function reducerCounter(state = intialStateCounter, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                firstCounter: state.firstCounter + action.payload
            };
        case "DECREMENT":
            return {
                ...state,
                firstCounter: state.firstCounter - action.payload
            };
        case "RESET":
            return intialStateCounter;
        default:
            return state;
    }
}


const CounterCompoEx2 = () => {

    const [state, dispatch] = useReducer(reducerCounter, intialStateCounter);

    return (
        <Fragment>
            <div>FirstCounter: {state.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 2 })}>increment by 2</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: 4 })}>decrement by 4</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
        </Fragment>
    );
}

export default CounterCompoEx2;