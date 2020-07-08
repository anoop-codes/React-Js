import React, { memo } from 'react';

const ButtomComp = (props) => {
    console.log('RENDERING BUTTON', props.children)
    return (
        <>
            <button onClick={props.handleClick}>
                {props.children}
            </button>
        </>
    );
}

export default memo(ButtomComp);