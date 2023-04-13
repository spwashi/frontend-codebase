import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FormBody, FormConfig} from './.fields/components/FieldFactory';
import _ from 'lodash';
import {formClassNames} from './styles/classNames';
import {Form} from './components/Form';

function useHandler(form: FormConfig, index: 'onReset' | 'onChange' | 'onSubmit', origHandler?: (e: any) => void): [boolean, (d: any) => void] {
  const [canSubmit, setCanSubmit] = useState(false);

  const handler = useCallback(
    (d: any) => {
      const out       = form.items.map(item => {
        const validators = item.validators?.[index];
        if (!validators) return [];
        return [item.name, validators.map((validator) => validator(d, d?.[item.name]))]
      })
      const canSubmit = out.filter(([k, o]) => {
        return (o as any)?.filter((o: any) => (typeof o !== 'undefined') && o !== true).length;
      }).length === 0;
      setCanSubmit(canSubmit);
      if (!origHandler) return;
      console.log(index)
      origHandler(d)
    },
    [origHandler],
  );

  return [canSubmit, handler]
}


type Params = {
  config?: FormConfig,
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
  const defaultForm = useMemo(() => _.cloneDeep(formConfig ?? {formId: '', items: []} as FormConfig), [formConfig]);
  const formRef     = useRef(defaultForm)
  const form        = formRef.current;


  const [didChangeSuccessfully, changeHandler] = useHandler(form, 'onChange', onChange);
  const [wasSuccessful, submitHandler]         = useHandler(form, 'onSubmit', onSubmit);
  const [didReset, resetHandler]               = useHandler(form, 'onReset', onReset);
  const canSubmit                              = !!onSubmit && didChangeSuccessfully;
  return (
    <section className={formClassNames.formWrapper}>
      {form.title && <header>{form.title} <small className="dev-only">{form.formId}</small></header>}
      <Form
        id={form.formId}
        onReset={resetHandler}
        onSubmit={submitHandler}
        onChange={changeHandler}
        defaultValue={defaultValue}
        buttons={[canSubmit && {type: 'submit'}]}
      >
        <FormBody items={form.items}/>
        {children}
      </Form>
    </section>
  )
}