import React from 'react';
import { useFormik } from 'formik';

const YouTubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },

        onSubmit: (values) => {
            console.log(values)
        }
        ,
        validate: values => {
            const errors = {}
            if (!values.name) {
                errors.name = 'name is required'
            }
            if (!values.email) {
                errors.email = 'email is required'
            }
            if (!values.channel) {
                errors.channel = 'channel is required'
            }
            return errors
        }
    });

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
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="chennal">Chennal:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="chennal"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default YouTubeForm;