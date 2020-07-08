import React, { useReducer, createContext } from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentA from './ComponentA';

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

export const counterContext = createContext();

const HomeWithUseContext = () => {

    const [count, dispatch] = useReducer(reducerCounter, intialStateCounter);

    return (
        <div>
            <div> count in parent : {count}</div>
            <counterContext.Provider value={{ count, dispatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </counterContext.Provider>
        </div>
    );
}

export default HomeWithUseContext;