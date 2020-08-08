import React from 'react';
import { counterContext } from '../HomeCompo';
import { useContext } from 'react';

const ComponentBD = () => {

    const { state, dispatch } = useContext(counterContext);

    return (
        <>
            <strong>Hooks Compnent BD Count : {state.count}</strong>
            <button className="btn btn-danger btn-sm m-3" onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
        </>
    );
}

//consume by a render props pattern

export default ComponentBD;