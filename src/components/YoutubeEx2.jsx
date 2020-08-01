import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        twitter: '',
        facebook: ''
    }
}

const onSubmit = (values, submiting) => {
    //...
    console.log(submiting)
}

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().required(),
    comment: Yup.string().max(1500).required(),
    address: Yup.string().max(50).required(),
    facebook: Yup.string().required()



})

const YoutubeEx2 = () => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                <Form>

                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <Field
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter the Name"
                        />
                        <ErrorMessage name="name" component={TextError} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter the Email"
                        />
                        <ErrorMessage name="email" component={TextError} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="channel">Channel:</label>
                        <Field
                            className="form-control"
                            id="channel"
                            name="channel"
                            placeholder="Enter the Channel Name"
                        />
                        <ErrorMessage name="channel" component={TextError} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <Field
                            as="textarea"
                            className="form-control"
                            id="comment"
                            name="comment"
                            placeholder="Enter the Comment"
                        />
                        <ErrorMessage name="comment">
                            {
                                (props) => {
                                    return <div className="alert alert-danger">
                                        {props}
                                    </div>
                                }
                            }
                        </ErrorMessage>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <Field name="address">
                            {
                                (props) => {
                                    const { field, form, meta } = props;
                                    return <input className="form-control" id="address" placeholder="Enter the Address"  {...field} />
                                }
                            }
                        </Field>
                        <ErrorMessage name="address" component={TextError} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="facebook">FacebookId:</label>
                        <Field
                            className="form-control"
                            id="facebook"
                            name="social.facebook"
                            placeholder="Enter the id"
                        />
                        <ErrorMessage name="facebook" >
                            {
                                (props) => {
                                    console.log(props)
                                    return <div></div>
                                }
                            }
                        </ErrorMessage>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>

                </Form>
            </Formik>
        </>
    );
}

export default YoutubeEx2;

/**
 * Formik Component
 *  -Formik : replacement to useFormik hook
 *  -Form
 *  -Field : it act as a wrapper for a input/textarea/etc.... , and take name as value the value property defined in the initialValues obj , it take care of handleChange, handleBlue and value
 *  -ErrorMessage
 */