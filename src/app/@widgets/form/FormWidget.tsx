import React, {useCallback, useMemo, useRef, useState} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import {formClassNames} from './styles/classNames';
import FormItems from './features/fields/components/FieldFactory';
import InnerFormComponent from './components/InnerFormComponent';

import {IFormConfig} from './types/IFormConfig';

function useHandler(form: IFormConfig, index: 'onReset' | 'onChange' | 'onSubmit', origHandler?: (e: any) => void): [boolean, (d: any) => void] {
  const [canSubmit, setCanSubmit] = useState(false);

  const handler = useCallback(
    (d: any) => {
      const out       = form.items.map(item => {
        const validators = item.validators?.[index];
        if (!validators) return [];
        return [item.name, validators.map((validator) => validator(d, d?.[item.name]))]
      })
      const canSubmit = out.filter(([, o]) => {
        return (o as any)?.filter((o: any) => (typeof o !== 'undefined') && o !== true).length;
      }).length === 0;
      setCanSubmit(canSubmit);
      if (!origHandler) return;
      origHandler(d)
    },
    [origHandler],
  );

  return [canSubmit, handler]
}


type Params = {
  config: IFormConfig,
  children?: any
  defaultValue?: any,
  onReset?: () => void,
  onSubmit?: (data: any) => void,
  onChange?: (data: any) => void,
};

export function FormWidget({
                             config: formConfig,
                             defaultValue,
                             onSubmit,
                             onReset,
                             children,
                             onChange,
                           }: Params) {
  const defaultForm = useMemo(() => cloneDeep(formConfig), [formConfig]);
  const formRef     = useRef(defaultForm)
  const form        = formRef.current;


  const [didChangeSuccessfully, changeHandler] = useHandler(form, 'onChange', onChange);
  const [, submitHandler]                      = useHandler(form, 'onSubmit', onSubmit);
  const [, resetHandler]                       = useHandler(form, 'onReset', onReset);
  const canSubmit                              = !!onSubmit && didChangeSuccessfully;
  return (
    <section className={formClassNames.formWrapper}>
      {form.title && <header>{form.title} <small className="dev-only">{form.formId}</small></header>}
      <InnerFormComponent
        id={form.formId}
        onReset={resetHandler}
        onSubmit={submitHandler}
        onChange={changeHandler}
        defaultValue={defaultValue}
        buttons={[canSubmit && {type: 'submit'}]}
      >
        <FormItems items={form.items}/>
        {children}
      </InnerFormComponent>
    </section>
  )
}