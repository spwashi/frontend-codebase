import React, {useContext} from 'react';
import {ACTION_RESET} from '../context/reducer';
import {FormContext} from '../context/components/FormContext';

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
export function ButtonContainer({buttons, hasChanged}: { buttons?: (ButtonConfig | false)[], hasChanged: boolean }) {
  if (!(buttons || hasChanged)) return null;
  return <div className="button-container">
    {(buttons ?? []).map(button => {
      if (!button) return null;
      return button.type === 'submit' ? <SubmitButton key={button.type}/> : null
    })}
    {hasChanged ? <ResetFormButton/> : null}
  </div>;
}