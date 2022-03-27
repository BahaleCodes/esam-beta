import React, { useContext, useState } from 'react';
import Input from './Input';
import ErrorModal from './ErrorModal';
import LoadingSpinner from './LoadingSpinner';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from '../../validators/validators';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import '../styles/Auth.css';

const Auth = () => {
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
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    username: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    },
                    username: {
                        value: '',
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };
    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://127.0.0.1:8000/auth/token',
                'POST',
                JSON.stringify({
                    username: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    grant_type: "password",
                    client_secret: 'rcSM6qqZqhRWEMMLrD1Av2ZcxySCL4nNDvvvFiYqdZzOY0QTrb7nUl0lRjtVgF37NjvIewiitu9mV5sEXZtAgsoCgnjFGbceNgpjFgl9fMcz0B2yLw82hkPeGrGLUEKX',
                    client_id: 'AAIXGp7K0To1VlPt1R7kn1vURBfEZgOIFje5ZXhV'
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.access_token);
        } catch (err) { }
    };
    const register = async event => {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://localhost:8000/api/signin',
                'POST',
                JSON.stringify({
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
            auth.login(responseData.userId, responseData.access_token);
        } catch (err) { }
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            {
                isLoginMode ? <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2> : <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">Create a new account</h2>
            }
            <div>
                <p className="mt-2 text-center text-sm text-gray-600" onClick={switchModeHandler}>
                    Or{' '}
                    {
                        isLoginMode
                            ? <a href="/" className="font-medium text-white-600 hover:text-red-400 mb-4 ">Creat an account with us.</a> 
                            : <a href="/" className="font-medium text-red-600 hover:text-red-500">Already have an accoun? Sign In.</a>
                    }

                </p>

                <form onSubmit={isLoginMode ? authSubmitHandler : register}>
                    {!isLoginMode && (
                        <Input
                            element="input"
                            id="name"
                            type="text"
                            label="Your Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter a name."
                            onInput={inputHandler}
                        />
                    )}
                    {!isLoginMode && (
                        <Input
                            element="input"
                            id="username"
                            type="text"
                            label="Your User Name"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter you user name."
                            onInput={inputHandler}
                        />
                    )}
                    <Input
                        element="input"
                        id="email"
                        type="email"
                        label="E-Mail"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email address."
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a valid password, at least 5 characters."
                        onInput={inputHandler}
                    />
                    {!isLoginMode && (
                        <Input
                            element="input"
                            id="confirm_password"
                            type="password"
                            label="Confirm Password"
                            validators={[VALIDATOR_MINLENGTH(6)]}
                            errorText="Please enter a valid password, at least 5 characters."
                            onInput={inputHandler}
                        />
                    )}
                    {isLoginMode &&
                        (
                            <div className="flex items-center justify-between mt-2">


                                <div className="text-sm">
                                    <a href="/home/password-reset" className="font-medium text-white-600 hover:text-white-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                        )}
                    <div className="form-group mt-3">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-50" disabled={!formState.isValid}>SIGN IN</button>
                    </div>

                </form>
            </div>
        </React.Fragment>
    );
};

export default Auth;

