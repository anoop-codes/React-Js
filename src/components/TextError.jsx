import React from 'react';

const TextError = (props) => {

    return (
        <div className="alert alert-danger alert-sm">
            {props.children}
        </div>
    );
}

export default TextError;