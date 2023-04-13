import React from 'react';
import {ResetFormButton} from './ResetFormButton';
import {SubmitButton} from './SubmitButton';

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