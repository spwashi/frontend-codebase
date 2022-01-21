import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FormBody, FormConfig} from './Factory';
import {FormContextProvider} from './context/FormContext';

export function StandardForm({
                                 form: formConfig,
                                 defaultValue,
                                 onSubmit,
                                 onChange,
                             }: {
    form: FormConfig,
    defaultValue?: any,
    onSubmit: (data: any) => void,
    onChange?: (data: any) => void,
}) {
    const defaultForm = useMemo(() => JSON.parse(JSON.stringify(formConfig)), [formConfig]);
    const formRef     = useRef(defaultForm)
    const form        = formRef.current;

    const [eff, setEff] = useState({} as any | null);
    useEffect(() => {
        return;
        if (!defaultValue) return;

        const out = {} as any;
        console.log(formRef.current)


        formRef.current
               .items
               .forEach((item: any) => {
                   const name = item.name;

                   if (eff[name]) item.value = undefined;

                   const val = (defaultValue as any)[name];
                   if (!defaultValue.hasOwnProperty(name)) return;


                   out[name]  = val;
                   item.value = val
               })
        setEff(out)
    }, [defaultValue]);

    return (
        <section className="form-wrapper">
            <header>{form.title}</header>
            <FormContextProvider onSubmit={onSubmit} onChange={onChange} defaultValue={defaultValue}>
                <FormBody items={form.items}/>
            </FormContextProvider>
        </section>
    )
}