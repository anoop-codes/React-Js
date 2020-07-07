import React from 'react';
import { buyCake } from '../../redux/cake/cake-action';
import { connect } from 'react-redux';

const HomeCakeCompo = (props) => {
    return (
        <>
            <span>name : {props.name}</span>
            <h6>Number of cake : {props.numberOfCake}</h6>
            <button onClick={props.buyCake} disabled={props.numberOfCake === 0}>BUY CAKE</button>
        </>
    );
}



/**
 * 
 * @param {*} state : state of the store
 * @param second parameter : it is the props that is pass 
 */

const mapStateToprop = (state, ownProps) => {
    /**
     * this props can be used for rendering , making reuseable component
     */
    return {
        numberOfCake: state.cake.numberOfCake
    }
}


const mapDispatchToprop = (dispatch, ownProps) => {
    /**
     * ownprops :anoop kumaris pas here also.
     */
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToprop, mapDispatchToprop)(HomeCakeCompo);