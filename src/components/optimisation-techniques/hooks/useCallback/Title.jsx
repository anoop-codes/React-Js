import React, { memo } from 'react';

const TitleCompo = () => {
    console.log('RENDERING TITLE')
    return (
        <>
            <h3>useCallback hook</h3>
        </>
    );
}

export default memo(TitleCompo);