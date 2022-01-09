import React from 'react';
import {FormBody, FormConfig} from './Factory';
import {FormContextProvider} from './FormContext';

export function StandardForm({
                                 form,
                                 onSubmit,
                                 onChange,
                             }: {
    form: FormConfig,
    onSubmit: (data: any) => void,
    onChange?: (data: any) => void,
}) {
    return (
        <section className="form-wrapper">
            <header>{form.title}</header>
            <FormContextProvider onSubmit={onSubmit} onChange={onChange}>
                <FormBody items={form.items}/>
            </FormContextProvider>
        </section>
    )
}