import React, { memo } from 'react';

const Title = () => {
    console.log('Rendering Title Compo')
    return (
        <>
            <h2>
                useCallback Hook
            </h2>
        </>
    );
}

export default memo(Title);