import React from 'react';
import { memo } from 'react';

const MemoCompo = (props) => {
    console.log('Memo component')
    return (
        <>
            memo compo : {props.title}
        </>
    );
}

export default memo(MemoCompo);