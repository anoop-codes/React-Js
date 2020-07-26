import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const initialValues = {
    email: '',
    comments: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    comment: Yup.string().max(100)
})

const FormikContainer = () => {

    const onSubmit = (fvalue, fsettings) => {
        console.log(fsettings)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikControl
                                control="input"
                                type="email"
                                name="email"
                                label="Email"
                            />

                            <FormikControl
                                control="textarea"
                                name="comment"
                                label="Comment"
                            />
                            <button type="submit" className="btn btn-success btn-sm">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default FormikContainer;