import React from 'react';
// import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
// import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach



const SignUpForm = () => (
    <Formik
        initialValues={{ email: "", username: "", name: "", password: "", confirmPassword: "" }}
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
            name: Yup.string().required("Required"),
            username: Yup.string().required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })}


    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className={(errors.name && touched.name) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}
                            placeholder="First Name"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {errors.name && touched.name && (
                            <div className="mt-1 input-feedback">{errors.name}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className={(errors.username && touched.username) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}
                            placeholder="Username"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                        {errors.username && touched.username && (
                            <div className="mt-1 input-feedback">{errors.username}</div>
                        )}
                    </div>
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
                            <div className="mt-1 input-feedback">{errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={(errors.password && touched.password) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}

                        />
                        {errors.password && touched.password && (
                            <div className="mt-1 input-feedback">{errors.password}</div>
                        )}

                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={(errors.confirmPassword && touched.confirmPassword) ? "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-red-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black" : "appearance-none rounded-none relative block w-full px-3 mb-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"}

                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <div className="mt-1 input-feedback">{errors.confirmPassword}</div>
                        )}
                    </div>
                    <div>

                        <div className="form-group mt-3">
                            <button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-50">SIGN UP</button>
                        </div>

                    </div>
                </form>
            )
        }}
    </Formik>

);

export default SignUpForm
