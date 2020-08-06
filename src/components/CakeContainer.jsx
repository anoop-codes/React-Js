import React from 'react';
import { buyCake } from '../store/cakes/cake-action';
import { connect } from 'react-redux';


const CakeConatiner = ({ state, buyCake }) => {

    return (
        <>
            <strong>Number of cake: </strong><span>{state.cakes.numberOfCake}</span>
            <button className="btn btn-sm m-3 btn-light" onClick={buyCake} disabled={state.cakes.numberOfCake === 0}>BUY CAKE</button>
        </>
    );
}

const mapStateToProps = (state, ownprops) => {
    //console.log(ownprops) : sort by 
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeConatiner);