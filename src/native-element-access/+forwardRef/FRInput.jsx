import React from 'react';

const FRInput = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" ref={ref} />
            </div>
        </>
    );
})

export default FRInput;