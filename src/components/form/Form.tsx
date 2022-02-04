import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FormBody, FormConfig} from './field/components/Factory';
import {FormContextProvider} from './context/FormContext';
import _ from 'lodash';

function useHandler(form: FormConfig, index: 'onChange' | 'onSubmit', onChange?: (e: any) => void): [boolean, (d: any) => void] {
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
            if (!onChange) return;
            console.log(index)
            onChange(d)
        },
        [onChange],
    );

    return [canSubmit, handler]
}
export function StandardForm({
                                 form: formConfig,
                                 defaultValue,
                                 onSubmit,
                                 onChange,
                             }: {
    form: FormConfig,
    defaultValue?: any,
    onSubmit?: (data: any) => void,
    onChange?: (data: any) => void,
}) {
    const defaultForm = useMemo(() => _.cloneDeep(formConfig), [formConfig]);
    const formRef     = useRef(defaultForm)
    const form        = formRef.current;


    const [canSubmit, changeHandler]     = useHandler(form, 'onChange', onChange);
    const [wasSuccessful, submitHandler] = useHandler(form, 'onSubmit', onSubmit);

    return (
        <section className="form-wrapper">
            {form.title && <header>{form.title}</header>}
            <FormContextProvider
                id={form.formId}
                onSubmit={submitHandler}
                onChange={changeHandler}
                defaultValue={defaultValue}
                buttons={[onSubmit && canSubmit && <button key="submit" type="submit">submit</button>]}
            >
                <FormBody items={form.items}/>
            </FormContextProvider>
        </section>
    )
}