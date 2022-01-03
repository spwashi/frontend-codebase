import React, {useCallback, useMemo, useReducer} from 'react';
import {Log} from '../Log';

export type FormContextState = {
    data: { [p: string]: any };
    key: string | number;
    dispatch: (action: { type: string, payload: any }) => void;
};
export const FormContext: React.Context<FormContextState> = React.createContext({
                                                                                    key:      '' as string | number,
                                                                                    data:     {} as { [k: string]: any },
                                                                                    dispatch: (action) => {},
                                                                                });


function getInitialState() {
    return {key: 0, data: {} as any};
}


/**
 * Provides the initial state to the FormContext.Provider
 */
export function useFormContextProviderState() {
    return;
}


type ProviderProps = {
    children: any,
    onSubmit: (data: any) => void
};

export const ACTION_UPDATE_INDEX = 'update';
const formReducer                =
          (state = {data: {}}, action: { type: string, payload: any }) => {
              switch (action.type) {
                  case ACTION_UPDATE_INDEX:
                      const {index, value} = action.payload;
                      return {...state, data: {...state.data, [index]: value}};
              }
              return state;
          }


export const FormContextProvider = ({children, onSubmit}: ProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, getInitialState())
    const handleSubmit      = useCallback((event) => {
        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        onSubmit(state)
    }, [onSubmit, state]);
    const value             = useMemo(() => ({data: state, dispatch, key: 0}), [state, dispatch]);
    return (
        <FormContext.Provider value={value}>
            <Log>{state}</Log>
            <form onSubmit={handleSubmit}>
                {children}
                <button type="submit">submit</button>
            </form>
        </FormContext.Provider>
    )
}


