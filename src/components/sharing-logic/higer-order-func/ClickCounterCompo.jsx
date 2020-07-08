import React from 'react';
import withCounterHoc from './withCounterHoc';

const ClickCounterCompo = ({ count, increment }) => {

    return (
        <>
            <button onClick={increment}>Clicked {count} times</button>
        </>
    );
}

export default withCounterHoc(ClickCounterCompo)
