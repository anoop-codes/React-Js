import React from 'react';
import Input from '../common/Input';
import TextArea from '../common/TextArea';

const FormikControl = ({ control, ...rest }) => {
    switch (control) {

        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        case 'select':
            break;
        case 'radio':
            break;
        case 'checkbox':
            break;
        case 'date':
            break;

        default:
            return null;
    }
}

export default FormikControl;