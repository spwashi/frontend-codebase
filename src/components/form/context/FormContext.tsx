import React, {useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {getInitialState} from './initialState';
import {ACTION_RESET, ACTION_SET_DEFAULT, formReducer} from './reducer';
import {FormState} from './types';

export const ID_EMPTY = '[empty]';

export const formContext: React.Context<FormState> = React.createContext(getInitialState({}, ID_EMPTY));
type ProviderProps<T = any> = {
    children: any;
    defaultValue?: T
    buttons?: ButtonConfig[]
    id?: string;
    onSubmit?: (data: T) => void;
    onChange?: (data: T) => void;
};

function ResetFormButton() {
    const dispatch = useContext(formContext)?.dispatch;
    if (!dispatch) return null;
    return <>
        <button type="button" onClick={e => dispatch({type: ACTION_RESET, payload: {}})}>reset</button>
    </>;
}

function SubmitButton() {
    const context = useContext(formContext);
    return <button key="submit" type="submit" onClick={e => context.submit()}>submit</button>;
}

export type ButtonConfig = { type: 'submit' | 'reset' };
function ButtonContainer({buttons, hasChanged}: { buttons?: ButtonConfig[], hasChanged: boolean }) {
    if (!(buttons || hasChanged)) return null;
    return <div className="button-container">
        {(buttons ?? []).map(button => {
            return button.type === 'submit' ? <SubmitButton/> : null
        })}
        {hasChanged ? <ResetFormButton/> : null}
    </div>;
}

export function Form({
                         id,
                         children,
                         defaultValue,
                         buttons,
                         onSubmit,
                         onChange,
                     }: ProviderProps) {
    const [state, dispatch] = useReducer(formReducer, getInitialState(defaultValue, id));
    const handleSubmit      = useCallback((event) => {
        event?.preventDefault && event.preventDefault();
        event?.stopPropagation && event.stopPropagation();
        onSubmit?.(state)
    }, [onSubmit, state]);
    state.dispatch          = dispatch;
    state.submit            = handleSubmit;

    useEffect(() => { onChange?.(state); }, [state]);
    useEffect(() => { dispatch({type: ACTION_SET_DEFAULT, payload: defaultValue}) }, [defaultValue]);


    const value      = useMemo(() => ({...state}), [state.data, dispatch]);
    const hasChanged = !!Object.entries(state?.data ?? {}).filter(([, v]) => !!v).length;
    return (
        <formContext.Provider value={value}>
            <form onSubmit={state.submit}>
                {children}
                <ButtonContainer buttons={buttons} hasChanged={hasChanged}/>
            </form>
        </formContext.Provider>
    )
}


