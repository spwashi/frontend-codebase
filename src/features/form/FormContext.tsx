import React, {useCallback, useContext, useMemo, useState} from 'react';

export const FormContext = React.createContext({key: '' as string | number, data: {} as { [k: string]: any }});


function getInitialState() {
    return {key: 0, data: {} as any};
}


/**
 * Provides the initial state to the FormContext.Provider
 */
export function useFormContextProviderState() {
    return useMemo(() => getInitialState(), []);
}


type ProviderProps = {
    children: any,
    onSubmit: (data: any) => void
};

export const FormContextProvider = ({children, onSubmit}: ProviderProps) => {
    const state        = useFormContextProviderState();
    const handleSubmit = useCallback((event) => {
        event.preventDefault && event.preventDefault();
        onSubmit(state.data)
    }, []);
    return (
        <FormContext.Provider value={state}>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </FormContext.Provider>
    )
}


function useFormIndex(form: { data: { [p: string]: any }; key: string | number }, formKey: string) {
    const [localValue, setLocalValue] = useState('');
    const update                      = useCallback(
        (text: string) => {
            Object.assign(
                form,
                {
                    key:  Date.now(),
                    data: {...form.data, [formKey]: text},
                },
            )
            setLocalValue(text);
        },
        [form],
    );
    return [localValue, update] as [string, (t: string) => void];
}
export function TextInput({
                              formKey,
                              name,
                              ...rest
                          }: { formKey: string } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormIndex(form, formKey);
    const onChange             = getInputChangeHandler(update);
    const {type = 'text'}      = rest;
    return (
        <>
            <input
                {...rest}
                type={type}
                name={name}
                value={localValue}
                onChange={onChange}
            />
        </>
    );
}
export function SelectInput({
                                formKey,
                                name,
                                options,
                                ...rest
                            }: { formKey: string, options: (string | { title: string, value: string })[] } & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormIndex(form, formKey);
    const onChange             = getInputChangeHandler(update);

    return (
        <select {...rest} name={name} value={localValue ?? ''} onChange={onChange}>
            <option value="">Select One...</option>
            {
                options.map((option) => {
                    if (typeof option === 'string') return <option key={option}>{option}</option>;
                    return (
                        <option key={option.value} value={option.value}>{option.title}</option>
                    )
                })
            }</select>

    );
}
function getInputChangeHandler(setValue: (s: string) => void): React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> | undefined {
    return e => setValue(e.target.value);
}