import React, { memo } from 'react';

const CountComp = ({ text, count }) => {
    console.log('RENDERING', text)
    return (
        <>
            <ul>
                <li>{text}</li>
                <li>{count}</li>
            </ul>
        </>
    );
}

export default memo(CountComp);