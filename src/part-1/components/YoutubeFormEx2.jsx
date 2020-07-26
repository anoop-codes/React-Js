import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as yup from 'yup';
import ErrorText from '../common/ErrorText';
import { useState } from 'react';

const validationSchema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().min(3).email().required(),
    channel: yup.string().min(3).max(10).required(),
    //comments: yup.string().min(3).max(100).required(),
    // address: yup.string().min(3).max(100).required(),
    // facebook: yup.string().min(3).max(10).required(),

})

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
    phoneNumbers: ['', ''],
    phNumbers: ['']
}


const savedValue = {
    name: 'anoop',
    email: 'kumar@gmail.com',
    channel: 'code-anoop',
    comments: 'very intersting ',
    address: 'devalai',
    social: {
        facebook: 'NA',
        twitter: 'NA'
    },
    phoneNumbers: ['9831958426', ''],
    phNumbers: ['0253-121231']
}

//filed level validation
const validateComments = (value) => {
    let error;
    if (!value) {
        error = 'required'
    }

    return error
}

const onSubmit = (formValues, submittingProps) => {
    console.log('submitted', submittingProps)

}


const YouTubeFormEx2 = () => {

    const [state, setState] = useState(null)

    return (
        <Formik
            initialValues={state || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={false} // prevent the file to validate on change of field
            //validateOnBlur={false} // same as on chnage
            enableReinitialize // allow re initallization of the form
        >

            <Form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <Field
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        name="name"
                    />
                    <ErrorMessage name="name" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address: </label>
                    <Field
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                    />
                    <ErrorMessage name="email" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="chennal">Chennal :</label>
                    <Field type="text"
                        className="form-control"
                        id="chennal"
                        name="channel"
                        placeholder="Enter Channel Name"
                    />
                    <ErrorMessage name="channel" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comments :</label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="comments"
                        name="comments"
                        placeholder="Enter Comments"
                        validate={validateComments}
                    />
                    <ErrorMessage name="comments" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address :</label>

                    {/* use for Custom componetnts */}
                    <Field name="address">
                        {
                            ({ field, meta, form }) => {
                                return <>
                                    <textarea className="form-control" placeholder="Enter Address" {...field}></textarea>
                                    {meta.touched && meta.error &&
                                        <div className="alert alert-danger">
                                            {meta.error}
                                        </div>}
                                </>
                            }
                        }
                    </Field>
                </div>

                <div className="form-group">
                    <label htmlFor="facebook">Facebook Profile :</label>
                    <Field
                        //by-default the type is text
                        className="form-control"
                        id="facebook"
                        name="social.facebook"
                        placeholder="Enter Facebook  id"
                    />
                    <ErrorMessage name="social.facebook" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="twitter">Twitter Profile :</label>
                    <Field
                        //by-default the type is text
                        className="form-control"
                        id="twitter"
                        name="social.twitter"
                        placeholder="Enter Twitter  id"
                    />
                    <ErrorMessage name="social.twitter" component={ErrorText} />
                </div>

                <div className="form-group">
                    <label htmlFor="phonenumberpr">PhoneNumber Primary:</label>
                    <Field
                        className="form-control"
                        id="phonenumberpr"
                        name="phoneNumbers[0]"
                        placeholder="Enter Phonenumber Primary"
                    />
                    {/* <ErrorMessage name="phonenumber[0]" component={ErrorText} /> */}
                </div>

                <div className="form-group">
                    <label htmlFor="phonenumberhm">PhoneNumber Home :</label>
                    <Field
                        className="form-control"
                        id="phonenumberhm"
                        name="phoneNumbers[1]"
                        placeholder="Enter Phonenumber Home"
                    />
                    {/* <ErrorMessage name="phonenumber[1]" component={ErrorText} /> */}
                </div>



                <div className="form-group">
                    <label htmlFor="phNumbers">List of PhNumbers :</label>
                    <FieldArray
                        name="phNumbers"
                    >
                        {
                            (fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { phNumbers } = form.values;
                                return <div>
                                    {phNumbers.map((phoneNumbers, index) => (

                                        <div key={index}>
                                            <div>{phoneNumbers}</div>
                                            <Field name={`phNumbers[${index}]`} className="form-control" />
                                            <button className="btn btn-danger btn-sm m-3" onClick={() => remove(index)} disabled={phNumbers.length === 1}>-</button>
                                            <button onClick={() => push('')} className="btn btn-primary btn-sm" >+</button>
                                        </div>
                                    ))}
                                </div>
                            }
                        }
                    </FieldArray>
                    {/* <ErrorMessage name="phonenumber[1]" component={ErrorText} /> */}
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <button className="btn btn-light m-2" onClick={() => setState(savedValue)}>load Saved value</button>
            </Form>

        </Formik>
    );
}

/**
 * FastFiled an alternate to Filed component, it avoid re-rending of the form for every filed-control
 * 
 * on submit validation is handle by the formik
 */

export default YouTubeFormEx2;