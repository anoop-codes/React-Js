import React, { Component } from 'react';
import RefCompo from './RefCompo';
import ParentInputCompo from './ParentInputCompo';
import ParentFowrdRefCompo from './ParentFowrdRefCompo';


class HomeRefCompo extends Component {

    render() {
        return (
            <>
                <p>Ref compo</p>
                <RefCompo />
                <p>Parent input</p>
                <ParentInputCompo />
                <p>forw ref</p>
                <ParentFowrdRefCompo />
            </>
        );
    }
}

export default HomeRefCompo;

/**
 * ref allow to acces dom node directly in react.
 * it have be use to make directive in react like angular.
 */