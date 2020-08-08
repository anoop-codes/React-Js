import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const FocusInput = () => {

    //handy for keeping any mutable value around similar to how you’d use instance fields in classes.
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" ref={inputRef} />
        </div>
    );
}

export default FocusInput;