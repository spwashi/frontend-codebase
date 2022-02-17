import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FormBody, FormConfig} from './field/components/Factory';
import {ButtonConfig, Form} from './context/FormContext';
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


type Params = {
    config?: FormConfig,
    children?: any
    defaultValue?: any,
    onSubmit?: (data: any) => void,
    onChange?: (data: any) => void,
};

export function StandardForm({
                                 config: formConfig,
                                 defaultValue,
                                 onSubmit,
                                 children,
                                 onChange,
                             }: Params) {
    const defaultForm = useMemo(() => _.cloneDeep(formConfig ?? {formId: '', items: []} as FormConfig), [formConfig]);
    const formRef     = useRef(defaultForm)
    const form        = formRef.current;


    const [canSubmit, changeHandler]     = useHandler(form, 'onChange', onChange);
    const [wasSuccessful, submitHandler] = useHandler(form, 'onSubmit', onSubmit);

    return (
        <section className="form-wrapper">
            {form.title && <header>{form.title}</header>}
            <Form
                id={form.formId}
                onSubmit={submitHandler}
                onChange={changeHandler}
                defaultValue={defaultValue}
                buttons={[onSubmit && canSubmit && {type: 'submit'}].filter(i => !!i) as ButtonConfig[]}
            >
                <FormBody items={form.items}/>
                {children}
            </Form>
        </section>
    )
}