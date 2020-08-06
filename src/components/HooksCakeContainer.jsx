import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../store/cakes/cake-action';

const HooksCakesContainer = () => {

    const { numberOfCake } = useSelector(state => state.cakes);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Hooks :</h2>
            <strong>Number of cake: </strong><span>{numberOfCake || 0}</span>
            <button className="btn btn-sm m-3 btn-light" onClick={() => dispatch(buyCake(3))}>BUY CAKE</button>
        </>
    );
}

export default HooksCakesContainer;