import React, { memo } from 'react';

const Count = ({ text, count }) => {
    console.log('Rendering the Title Compo - ', text)
    return (
        <ul>
            <li>{text}</li>
            <li>{count}</li>
        </ul>
    );
}

export default memo(Count);