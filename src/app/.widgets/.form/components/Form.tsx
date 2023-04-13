import React, {useCallback, useEffect, useMemo, useReducer} from 'react';
import {ACTION_SET_DEFAULT, formReducer} from '../context/reducer';
import {getInitialState} from '../context/initialState';
import {Log} from '../../../components/dev/Log';
import {ButtonConfig, ButtonContainer} from './ButtonContainer';
import {FormState} from '../context/types';
import {FormContext} from '../context/components/FormContext';

type ProviderProps<T = any> = {
  children: any;
  defaultValue?: T;
  getChangeKey?: (formState: FormState) => any;
  buttons?: (ButtonConfig | false)[]
  id?: string;
  onReset?: (d?: any) => void,
  onSubmit?: (data: T) => void;
  onChange?: (data: T) => void;
};
export function Form({
                       id,
                       children,
                       buttons,
                       getChangeKey,
                       onSubmit,
                       onReset,
                       onChange,
                       defaultValue,
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
  const hasChanged = getChangeKey ? getChangeKey(state) : !!Object.entries(state.changed ?? {}).filter(([, v]) => (v)).length;
  return (
    <FormContext.Provider value={value}>
      <Log title={state.id} logReason="[form state]">{{state, hasChanged}}</Log>
      <form onSubmit={state.submit}>
        {children}
        <ButtonContainer buttons={buttons} hasChanged={hasChanged}/>
      </form>
    </FormContext.Provider>
  )
}