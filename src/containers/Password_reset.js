import React, { 
    // useContext,
    useState 
} from 'react';

import Input from '../components/widgets/Input';
// import ErrorModal from '../components/widgets/ErrorModal';
// import LoadingSpinner from '../components/widgets/LoadingSpinner';
import {
    VALIDATOR_EMAIL
} from '../validators/validators';
import { useForm } from '../hooks/form-hook';
import { useHttpClient } from '../hooks/http-hook';
// import { AuthContext } from '../context/auth-context';
// import Spinner from '../components/widgets/Spinner';
// import { useNavigate } from "react-router-dom";
const Password_reset = () => {
    // const auth = useContext(AuthContext);
    const {
        // isLoading, 
        // error, 
        sendRequest,
        // clearError 
    } = useHttpClient();
    // const [isLoginMode, setIsLoginMode] = useState(true);
    const [
        formState,
        inputHandler,
        // setFormData
    ] = useForm({
        email: { value: '', isValid: false },
        password: { value: '', isValid: false }
    },
        false
    );
    // const switchModeHandler = () => {
    //     if (!isLoginMode) {
    //         setFormData(
    //             {
    //                 ...formState.inputs,
    //                 name: undefined,
    //                 username: undefined
    //             },
    //             formState.inputs.email.isValid && formState.inputs.password.isValid
    //         );
    //     } else {
    //         setFormData(
    //             {
    //                 ...formState.inputs,
    //                 name: {
    //                     value: '',
    //                     isValid: false
    //                 },
    //                 username: {
    //                     value: '',
    //                     isValid: false
    //                 }
    //             },
    //             false
    //         );
    //     }
    //     setIsLoginMode(prevMode => !prevMode);
    // };
    const authSubmitHandler = async event => {
        event.preventDefault();
        try {
            await sendRequest(
                ' http://localhost:8000/auth/password_reset/',
                'POST',
                JSON.stringify({
                    email: formState.inputs.email.value,
                }),
                {
                    'Content-Type': 'application/json'
                }
            )
        } catch (err) { }
    };
    const [
        pageContent,
        // setContent
    ] = useState(
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white-900">Reset Email</h2>
            <div>
                <form onSubmit={authSubmitHandler}>
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
        </div>)

    return (
        <React.Fragment>
            <div bg-slate-100 className="min-h-full mt-4 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        {
                            pageContent
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Password_reset;

