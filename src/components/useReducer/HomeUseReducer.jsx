import React, { Component } from 'react';
import HomeDataFetchCompo from './dataFetching/HomeDataFetchingCompo';

class HomeUseReducer extends Component {
    state = {}
    render() {
        return (
            <>
                <HomeDataFetchCompo />
            </>
        );
    }
}

export default HomeUseReducer;

/**
 * useReducer is a hook that is used for state management.
 *
 * it is an alternative to useState. useState is build using useReducer.
 *
 * useReducer is a function(same as redux reducer)
 *          - useReducer(reducer, initalState)
 *          -rudecer(state, action)
 *
 * with useReducer + useContext , we can have a global statemagemt
 *
 *
 * useState vs useReducer
 *
 *
 * useState :   |for premitive type     | good for one or 2 state transision | for no releated      | no business           \ local
 * useReducer : |for object/array type | too many                             | for related type    | implement busion logic | gloabl state
 *
 */