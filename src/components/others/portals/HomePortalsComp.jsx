import React, { Component } from 'react';
import PortalDemo from './PortalDemo';

class HomePortalsCompo extends Component {
    state = {}
    render() {
        return (
            <>
                <PortalDemo />
            </>
        );
    }
}

export default HomePortalsCompo;

/**
 *  protals provide a way to render the children of a component tree  into  a dom node , that exist outside of the component tree.
 *
 *  css or madal or a popop / dailogbox
 *
 */