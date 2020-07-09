import React from 'react';

const FowrdRefCompo = React.forwardRef((props, ref) => {

    return (
        <>
            <input type="text" ref={ref} />
        </>
    );

})


/**
 * forwardRef method take in a component as it parameter
 */
export default FowrdRefCompo;

