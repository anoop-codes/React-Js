import React from 'react';
import { useFormik } from 'formik';
import CustomErrorMsg from '../common/CustomErrorMsg';
import * as Yup from 'yup';


const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values, helperFun) => {
    // console.log(values, helperFun)
}

const validate = (value) => {
    const errors = {};

    Object.keys(value).forEach(name => {
        if (!value[name])
            errors[name] = `${[name]} is required`
    });

    return errors;
}


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    channel: Yup.string().min(3).required()
})

const YoutubeFormEx1 = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    console.log(formik)

    return (
        <div>
            <h3>Youtube Form-</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        // value={formik.name}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('name')}
                    />

                    <CustomErrorMsg
                        touched={formik.touched.name}
                        errors={formik.errors.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={formik.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <CustomErrorMsg
                        touched={formik.touched.email}
                        errors={formik.errors.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="channel">Channel:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="channel"
                        value={formik.channel}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <CustomErrorMsg
                        touched={formik.touched.channel}
                        errors={formik.errors.channel}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default YoutubeFormEx1;