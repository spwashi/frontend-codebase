import React, {useCallback, useEffect, useMemo, useReducer} from 'react';
import {getInitialState} from './initialState';
import {ACTION_SET_DEFAULT, formReducer} from './reducer';
import {FormState} from './types';

export const FormContext: React.Context<FormState> = React.createContext(getInitialState());
type ProviderProps<T = any> = {
    children: any;
    defaultValue?: T
    onSubmit?: (data: T) => void;
    onChange?: (data: T) => void;
};


export const FormContextProvider = ({children, defaultValue, onSubmit, onChange}: ProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, getInitialState(defaultValue));
    state.dispatch          = dispatch;
    useEffect(() => { onChange?.(state); }, [state]);
    useEffect(() => {
        dispatch({type: ACTION_SET_DEFAULT, payload: defaultValue})
    }, [defaultValue]);


    const handleSubmit = useCallback((event) => {
        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        onSubmit?.(state)
    }, [onSubmit, state]);
    const value        = useMemo(() => ({...state}), [state.data, dispatch]);
    return (
        <FormContext.Provider value={value}>
            <form onSubmit={handleSubmit}>
                {children}
                {onSubmit && <button type="submit">submit</button>}
            </form>
        </FormContext.Provider>
    )
}


