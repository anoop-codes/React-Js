import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { createContext } from 'react';
import { useReducer } from 'react';

export const counterContext = createContext();

const initialState = {
    count: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

const HomeReducerContextCompo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <counterContext.Provider value={{ state, dispatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </counterContext.Provider>
        </>
    );
}

export default HomeReducerContextCompo;