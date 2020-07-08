import React, { Component } from 'react';
import RegularCompo from './RegularCompo';
import PureCompo from './PureCompo';
import MemoCompo from './MemoCompo';

class HomeParentCompo extends Component {
    state = {
        name: 'anoop'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'anoop'
            })
        }, 2000)
    }

    render() {
        console.log('************************ Parent Called ****************');
        return (
            <>
                <RegularCompo name={this.state.name} />
                <br />
                <br />
                <PureCompo name={this.state.name} />
                <br />
                <br />
                <MemoCompo name={this.state.name} />
            </>
        );
    }
}

export default HomeParentCompo;

/**
 * for perfomace boost
 *
 * a regular component does not implemet the shouldComponentupdate() method ,it alwasy return true by default.
 *
 * where as pure component do implement the shouldComponentupdate() method with shallow props and state compariosn.
 *
 * shallow comparsion :
 *      primitive : a (SC) b if they have same value and type. return true
 *
 *      reference : a (SC) b , if a and b have same refence (address) , return true.
 *
 *
 * if the parent doesn't re-render the childern will also not render , if using pure component , then children should be also be pure compo ,
 *
 * so it better to use regular compon mostly
 *
 *
 * ---important--
 *
 *  we should never mutate the state , like if we push some item into the arry , the address don't changes, so the shouldComponentupdate() checkfor change in reference it will not re-render, even though the state has change , alwasy retrun a new obj or arry when delaling with pure compo
 *
 *
 *
 * MEMo : work same has pure component for functional component.
 *
*/

