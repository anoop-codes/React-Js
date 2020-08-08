import React from 'react';
import { memo } from 'react';

const Button = ({ handleIncrement, children }) => {
    console.log('Rendering the button -', children);
    return (
        <button onClick={handleIncrement} className="btn btn-primary btn-sm m-3">{children}</button>
    );
}

export default memo(Button);