import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../errors/TextError';


const TextArea = ({ label, name, ...rest }) => {
    return (

        <div className="form-group">

            <label htmlFor={name}>{label}:</label>

            <Field
                as="textarea"
                className="form-control"
                id={name}
                placeholder={`enter ${label.toLowerCase()}...`}
                name={name}
                {...rest}
            />

            <ErrorMessage name={name} component={TextError} />
        </div>

    );
}

export default TextArea;