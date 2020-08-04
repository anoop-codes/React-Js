import React from 'react';
import HomeUseState from './useState/HomeUseState';

const HomeHooksCompo = () => {
    return (
        <>
            <HomeUseState />
        </>
    );
}

export default HomeHooksCompo;

/**
 *  ---Import : HOOKS don't work inside classes component---
 *
 * hooks advantgae:
 *  1: it allow us to use the feature of the class component , in as functional component
 *
 *  reasons :
 *     -reason 1:
 *          handling this.
 *          classes don't minify well and make hot reloading  very realiable
 *
 *     -reason 2:
 *          there is not no perticular way to reuse stateful component logic
 *          HOC and render props pattern do address this , but it very complicted to implement them.
 *
 *          :need to share the statefull logic in a better way, without changing the component hericeary
 *
 *     -reason 3:
 *          create component for complex scenerio such as data fetching , updating is not done at the same place
 *          ex : data fetching is done at , componentDidMount() , componentDidUpdate()
 *
 *
 */