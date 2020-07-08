import React, { Component } from 'react';
import HoverCounterRPCompo from './HoverCounterRP';
import ClickCounterRPCompo from './ClickCounterPR';
import UserCompo from './UserCompo';
import CounterRenderPropsCompo from './CounterRP';

class HomeRenderPropsCompo extends Component {
    state = {}
    render() {
        return (
            <>
                <p>Click Compo</p>
                <CounterRenderPropsCompo render={(state, increment) => <ClickCounterRPCompo count={state} incrementCount={increment} />} />
                <p>Hover compo</p>
                <HoverCounterRPCompo />
                <p>User compo</p>
                <UserCompo render={(isLoggedIn) => isLoggedIn ? "anoop kumar" : 'Guest'} />

            </>
        );
    }
}

export default HomeRenderPropsCompo;

/**
 *In react it is possible to a prop  whose value is a function  , to control what is actually rendered by the component.

 the render props: refers to a technique for sharing the code b/w the component using a prop whose value is function

 there is varisation to RP , we can use children..passing the func b/w the component
 */