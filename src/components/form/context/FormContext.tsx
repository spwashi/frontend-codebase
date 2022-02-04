import React, {useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {getInitialState} from './initialState';
import {ACTION_RESET, ACTION_SET_DEFAULT, formReducer} from './reducer';
import {FormState} from './types';
import {Log} from '../../Log';

export const FormContext: React.Context<FormState> = React.createContext(getInitialState());
type ProviderProps<T = any> = {
    children: any;
    defaultValue?: T
    buttons?: any[]
    id?: string;
    onSubmit?: (data: T) => void;
    onChange?: (data: T) => void;
};

function ResetFormButton() {
    const dispatch = useContext(FormContext)?.dispatch;
    if (!dispatch) return null;
    return <>
        <button type="button" onClick={e => dispatch({type: ACTION_RESET, payload: {}})}>reset</button>
    </>;
}

export const FormContextProvider = ({
                                        id,
                                        children,
                                        defaultValue,
                                        buttons,
                                        onSubmit,
                                        onChange,
                                    }: ProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, getInitialState(defaultValue, id));
    state.dispatch          = dispatch;
    useEffect(() => { onChange?.(state); }, [state]);
    useEffect(() => { dispatch({type: ACTION_SET_DEFAULT, payload: defaultValue}) }, [defaultValue]);


    const handleSubmit = useCallback((event) => {
        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        onSubmit?.(state)
    }, [onSubmit, state]);

    const value      = useMemo(() => ({...state}), [state.data, dispatch]);
    const hasChanged = Object.entries(state?.data ?? {}).filter(([, v]) => !!v).length;
    return (
        <FormContext.Provider value={value}>
            <Log>{state}</Log>
            <form onSubmit={handleSubmit}>
                {children}
                <div className="button-container">
                    {buttons ?? []}
                    {hasChanged ? <ResetFormButton/> : null}
                </div>
            </form>
        </FormContext.Provider>
    )
}


