import React from 'react';
import PropTypes from 'prop-types';

const CustomErrorMsg = ({ touched, errors }) => {

    return (
        <>
            {
                touched &&
                errors &&
                <div className="alert alert-danger">
                    {errors}
                </div>
            }
        </>
    );
}

CustomErrorMsg.defaultProps = {
    touched: false,
    errors: ''
}

CustomErrorMsg.prototype = {
    touched: PropTypes.bool.isRequired,
    errors: PropTypes.string.isRequired
}

export default CustomErrorMsg;