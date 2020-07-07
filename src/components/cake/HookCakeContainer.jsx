import React from 'react';
import { buyCake } from '../../redux/cake/cake-action';
import { useSelector, useDispatch } from 'react-redux';

const HookCakeContainer = () => {

    //only this much with using hooks
    const { numberOfCake } = useSelector(store => store.cake) // close eqivent to mapStateToProps func
    const dispatch = useDispatch(); //mapDisptachToProps 

    return (
        <>
            <h6> Hooks Number of cake :  {numberOfCake}</h6>
            <button onClick={() => dispatch(buyCake())} >BUY CAKE</button>
        </>
    );
}

/**
 * useage woring are there , while useing useSelect and useDispatch
 */


export default HookCakeContainer;