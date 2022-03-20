import React, { useReducer, useEffect } from 'react';

import { validate } from '../../validators/validators';
import '../styles/Input.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH': {
            return {
                ...state,
                isTouched: true
            };
        }
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };

    const element =
        props.element === 'input' ? (
            <input
                id={props.id}
                type={props.type}
                placeholder={props.label}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                className="appearance-none rounded-none relative block w-full px-3 mt-4 py-3 border-1 border-gray-800  placeholder-gray-500 text-white-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-red-500 focus:border-grey-800 focus:z-10 sm:text-sm bg-black"
            />
        ) : (
            <textarea
                id={props.id}
                rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
            />
        );



    return (
        <div
    
        >
            {element}
            {!inputState.isValid && inputState.isTouched && <p className='errorMsg flexitems-center mb-4 font-medium tracking-wide text-red-500 text-xs  ml-1 '>{props.errorText}</p>}
        </div>
    );
};

export default Input;
