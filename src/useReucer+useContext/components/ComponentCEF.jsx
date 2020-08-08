import React from 'react';
import { counterContext } from '../HomeCompo';
import { useContext } from 'react';

const ComponentCEF = () => {


    const { state, dispatch } = useContext(counterContext);

    return (
        <div>
            <strong>Hooks Compnent CEF Count : {state.count}</strong>
            <button className="btn btn-light btn-sm m-3" onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
        </div>
    );
}

export default ComponentCEF;