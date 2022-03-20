import React, { useContext, useState } from 'react';
import Input from './Input';
import {VALIDATOR_EMAIL} from '../../validators/validators';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import '../styles/Auth.css';

const ResetPasswordForm = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );


    return (
        <React.Fragment>
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">Reset Email</h2>

                <div>
                    <form onSubmit={props.sendRequest}>


                        <Input
                            element="input"
                            id="email"
                            type="email"
                            label="E-Mail"
                            validators={[VALIDATOR_EMAIL()]}
                            errorText="Please enter a valid email address."
                            onInput={inputHandler}
                        />


                        <div className="form-group mt-3">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-50">Reset Password</button>
                        </div>

                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPasswordForm;

