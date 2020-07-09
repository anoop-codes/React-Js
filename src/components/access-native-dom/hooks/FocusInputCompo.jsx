import React, { useRef, useEffect } from 'react';

const FocusInputCompo = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <>
            <input type="text" ref={inputRef} />
        </>
    );
}

export default FocusInputCompo;