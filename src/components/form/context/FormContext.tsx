import React, {useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {getInitialState} from './initialState';
import {ACTION_RESET, ACTION_SET_DEFAULT, formReducer} from './reducer';
import {FormState} from './types';
import {Log} from '../../Log';

export const ID_EMPTY = '[empty]';

export const FormContext: React.Context<FormState> = React.createContext(getInitialState({}, ID_EMPTY));
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

function ResetFormButton() {
  const dispatch = useContext(FormContext)?.dispatch;
  if (!dispatch) return null;
  return <>
    <button type="button" onClick={e => dispatch({type: ACTION_RESET, payload: {}})}>reset</button>
  </>;
}

function SubmitButton() {
  const context = useContext(FormContext);
  return <button key="submit" type="submit" onClick={e => {
    e.preventDefault();
    context.submit()
  }
  }>submit</button>;
}

export type ButtonConfig = { type: 'submit' | 'reset' };
function ButtonContainer({buttons, hasChanged}: { buttons?: (ButtonConfig | false)[], hasChanged: boolean }) {
  if (!(buttons || hasChanged)) return null;
  return <div className="button-container">
    {(buttons ?? []).map(button => {
      if (!button) return null;
      return button.type === 'submit' ? <SubmitButton key={button.type}/> : null
    })}
    {hasChanged ? <ResetFormButton/> : null}
  </div>;
}

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
      <Log title={state.id + ' state log'}>{{state, hasChanged}}</Log>
      {/*todo avoid nesting*/}
      <form onSubmit={state.submit}>
        {children}
        <ButtonContainer buttons={buttons} hasChanged={hasChanged}/>
      </form>
    </FormContext.Provider>
  )
}


