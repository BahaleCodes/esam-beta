
import { Formik } from "formik";
// import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"
import React from 'react';
// import { Link } from "react-router-dom";
// import { getArticles } from "../../api/axios";
// import Grow from '@material-ui/core/Grow';


const SignInForm = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                // isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form className="mt-8 space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className={(errors.email && touched.email) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}
                        
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {errors.email && touched.email && (
                            <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            // className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={(errors.password && touched.password) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}

                        />
                        {errors.password && touched.password && (
                            <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.password}</div>
                        )}

                    </div>
                    <div>

                        

                    </div>
                </form>
            )
        }}
    </Formik>
);

export default SignInForm;
