import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from '../common/TextError';


const savedData = {
    name: 'anoop',
    email: 'ak@gmail.com',
    channel: 'code-node',
    comments: 'abcdm',
    address: '',
    social: {
        facebook: 'dfs',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: ['']
}


const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: ['']
}

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().min(3).required(),
    address: Yup.string().max(10),
    social: Yup.object({
        facebook: Yup.string().required().label('facbook')
    })
})


const validateComment = (value) => {
    let error = null;

    if (!value) {
        error = "comments are required"
    }

    return error
}

const YoutubeFormEx2 = () => {

    const [formValue, setFormValues] = useState(initialValues);

    const onSubmit = (values, helperFun) => {
        let i = 0
        console.log('submitted')
        helperFun.setSubmitting(false);
        helperFun.resetForm()
    }


    return (
        <div>
            <h3>Youtube Form-</h3>
            <Formik
                initialValues={formValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                enableReinitialize
                validateOnChange={false}
            // validateOnMount

            >
                {
                    (formik) => {

                        return (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                    />
                                    <ErrorMessage name="name" component="div" className="alert alert-danger" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                    />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="channel">Channel:</label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="channel"
                                        name="channel"
                                    />
                                    <ErrorMessage name="channel" component={TextError} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="comments">Comments:</label>
                                    <Field
                                        as="textarea"
                                        className="form-control"
                                        id="comments"
                                        name="comments"
                                        validate={validateComment}
                                    />
                                    <ErrorMessage name="comments" component={TextError} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <FastField name="address">
                                        {
                                            (props) => {
                                                console.log('render Address')
                                                //field and meta are more important
                                                /**
                                                 * render props pattern , come handly while creating custom field 
                                                 */
                                                return <>
                                                    <input id="address" className="form-control" {...props.field} />
                                                    {
                                                        props.meta.touched && props.meta.error &&
                                                        <div className="alert alert-danger">
                                                            {props.meta.error}
                                                        </div>
                                                    }
                                                </>
                                            }
                                        }
                                    </FastField>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Social</h5>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <label htmlFor="facebook">Facebook:</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="facebook"
                                                    name="social.facebook"
                                                />
                                                <ErrorMessage name="social.facebook" component={TextError} />
                                            </li>
                                            <li className="list-group-item">
                                                <label htmlFor="twitter">Twitter:</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="twitter"
                                                    name="social.twitter"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card my-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PhoneNumber:</h5>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <label htmlFor="=primary">Primary Phone:</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="=primary"
                                                    name="phoneNumber[0]"
                                                />
                                                <ErrorMessage name="phoneNumber[0]" component={TextError} />
                                            </li>
                                            <li className="list-group-item">
                                                <label htmlFor="secondary">Secondary Phone:</label>
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    id="secondary"
                                                    name="phoneNumber[1]"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phNumbers">List of Phnumbers:</label>
                                    <FieldArray name="phNumbers">
                                        {
                                            (props) => {

                                                const { form, push, remove } = props;
                                                const { phNumbers } = form.values;

                                                return <ul className="list-group">
                                                    {
                                                        phNumbers.map((ph, index) => (
                                                            <li key={index} className="list-group-item">
                                                                <Field name={`phNumbers[${index}]`} className="form-control" />
                                                                <p>
                                                                    <button className="btn btn-sm btn-danger m-2" type="button" onClick={() => remove(index)} disabled={phNumbers.length === 1}>remove</button>
                                                                    <button className="btn btn-sm btn-success" type="button" onClick={() => push('')}>Add</button>
                                                                </p>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            }
                                        }
                                    </FieldArray>
                                </div>

                                <button type="submit" className="btn btn-primary m-2" disabled={formik.isSubmitting}>Submit</button>
                                <button type="reset" className="btn btn-primary m-2" onClick={() => setFormValues(initialValues)}>reset</button>
                                <button type="submit" className="btn btn-primary m-2" onClick={() => setFormValues(savedData)}>Load saved data</button>
                                {/* <button type="button" className="btn btn-primary m-2" onClick={() => formik.validateField('comments')}>validate comment</button>
                                <button type="button" className="btn btn-primary m-2" onClick={() => formik.setFieldTouched('comments')}>touched comment</button>
                                <button type="button" className="btn btn-primary m-2" onClick={() => formik.validateForm}>validate all</button>
                                <button type="button" className="btn btn-primary m-2" onClick={() => formik.setTouched({
                                    name: true,
                                    email: true,
                                    channel: true
                                })}>touched  all</button> */}
                            </Form>
                        )

                    }
                }
            </Formik>
        </div>
    );
}

/**
 * FastField: prevent re-rendering of all the field, optimise version of Field
 * 
 * onsubmit is not exec , if there is error in the form.
 */

export default YoutubeFormEx2;

