import React, { Component } from 'react';
import ClassCounterCompo from './ClickCounterCompo';
import HoverCounterCompo from './HoverCounterCompo';
import HookCounterCompo from './HookCounterCompo';

class HomeHigherOrderFunc extends Component {
    state = {}
    render() {
        return (
            <>
                <p>Click compo</p>
                <ClassCounterCompo rating="100" />
                <p>Hover compo</p>
                <HoverCounterCompo />
                <p>Hook</p>
                <HookCounterCompo />
            </>
        );
    }
}

export default HomeHigherOrderFunc;

/**
 * HOC : to share common functionality b/w the components.
 *       is a pattern where the function takes a component as an argument and returns a new component.
 *
 * the props pass the HOC and not to the component which is warpped , so {...props } should be done , to pass down the props
 *
 * as HOC are a func , we can pass argumnet to it.
 *
 *
 */