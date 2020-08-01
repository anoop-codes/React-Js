import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values, submiting) => {
    //...
    console.log(submiting)
}

// const validate = (values) => {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'required'
//     }
//     if (!values.email) {
//         errors.email = 'required'
//     }
//     if (!values.channel) {
//         errors.channel = 'required'
//     }

//     return errors;
// }

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().required()
})

const YoutubeEx1 = () => {

    //useFormik hook take a initial object
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    // console.log(formik)

    const { name, channel } = formik.values;

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && <div style={{ color: 'red' }}>
                        {formik.errors.name}
                    </div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>
                        {formik.errors.email}
                    </div>}
                </div>
                <div className="form-group">
                    <label htmlFor="channel">Channel:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="channel"
                        name="channel"
                        value={channel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel && <div style={{ color: 'red' }}>
                        {formik.errors.channel}
                    </div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

/**
 * Formik deals:
 *      managing the form state
 *      handling the submition
 *      validation and error msg
 * 
 *  {
 *      value={name}
 *      onChange={formik.handleChange} ==>  {...formik.getFieldProps('email')}
 *      onBlur={formik.handleBlur}
 *  }
 */

export default YoutubeEx1;