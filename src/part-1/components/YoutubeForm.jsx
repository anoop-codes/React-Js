import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().min(3).email().required(),
    channel: yup.string().min(3).max(10).required()
})



const YouTubeForm = () => {

    //a function that takes an object as it's param , return a object that hold the property which we can use
    const formik = useFormik({
        //inital state of the form
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        validationSchema,
        onSubmit: (formValues) => {
            console.log('submitted', formValues)
            formik.resetForm();
        }
    });

    console.log(formik)

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    name="name"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name &&
                    <div className="alert alert-danger">
                        {formik.errors.name}
                    </div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address: </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email &&
                    <div className="alert alert-danger">
                        {formik.errors.email}
                    </div>}
            </div>

            <div className="form-group">
                <label htmlFor="chennal">Chennal :</label>
                <input type="text"
                    className="form-control"
                    id="chennal"
                    name="channel"
                    placeholder="Enter Channel Name"
                    value={formik.values.channel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.channel && formik.errors.channel &&
                    <div className="alert alert-danger">
                        {formik.errors.channel}
                    </div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default YouTubeForm;