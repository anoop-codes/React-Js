import React from 'react';
import { buyIceCream } from '../store/ice-cream/iceCream-action';
import { useSelector, useDispatch } from 'react-redux';

const HooksIceCreamContainer = () => {
    const { numberOfIceCream } = useSelector(state => state.iceCream);
    const dispatch = useDispatch();
    return (<>
        <h2>Hooks iceCream :</h2>
        <strong>Number of ice cream: </strong><span>{numberOfIceCream || 0}</span>
        <button className="btn btn-sm m-3 btn-light" onClick={() => dispatch(buyIceCream(3))}>BUY CAKE</button>
    </>);
}

export default HooksIceCreamContainer;