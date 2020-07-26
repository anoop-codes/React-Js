import React from 'react';

const TextError = ({ children }) => {

    return (
        <div className="alert alert-danger">
            {children}
        </div>
    );
}

export default TextError;