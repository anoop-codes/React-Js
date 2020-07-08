import React, { memo } from 'react';

const MemoCompo = (props) => {
    console.log(' memo Called ');
    return (
        <>
            <span>memo compo {props.name}</span>
        </>
    );
}

export default memo(MemoCompo);