import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../context/FormContext';
import styles from '../styles/input.module.scss'
import SpwEditor from '../../../widgets/spw/SpwEditor';
import {convertFromRaw, convertToRaw, Editor, EditorState} from 'draft-js';

type InputParams =
    { formKey?: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Div {
    key: number;
    children: any;
    value: any;
    update: () => void
}

function InnerValue({children, value, update}: Div) {
    useEffect(() => {
        // update();
    }, [update]);
    return <div className="value">
        {children}
    </div>;
}
export function Value({
                          formKey,
                          children,
                          value,
                          calc,
                      }: {
    formKey: string;
    value?: any;
    children?: any;
    calc?: (data?: any) => any
}) {
    const form                 = useContext(FormContext);
    const [localValue, update] = useFormItemController(form, formKey ?? null, undefined, true);

    useEffect(() => {
        const v = calc ? calc(form?.data) : localValue;
        if (v !== value)
            update(v);
    }, [update, localValue, calc, form.key]);


    const doUpdate = useCallback(
        () => {
            update(calc ? calc(form?.data) : localValue);
        },
        [localValue],
    );

    const id = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);

    return <>
        <div className={styles.inputWrapper}>
            <FormContext.Consumer>
                {
                    ({key, data}) => {
                        return <InnerValue key={key} value={value} update={doUpdate}>{children}</InnerValue>
                    }
                }
            </FormContext.Consumer>
        </div>
    </>
}

function useRichTextEditor(params: InputParams, [localValue, update]: [EditorState | string, (v: string) => void]) {
    const {formKey, name, value, type, ...rest} = params
    const key                                   = useMemo(() => Date.now(), []);
    const [editorState, setEditorState]         = React.useState(() => {
        try {
            const prev = JSON.parse('' + (value ?? ''));
            return EditorState.createWithContent(convertFromRaw(prev))
        } catch (e) { }
        return EditorState.createEmpty();
    });
    useEffect(() => {
        const curr = editorState.getCurrentContent();
        if (type !== 'rich') return;
        update((type === 'rich' ? JSON.stringify(convertToRaw(curr)) : localValue) as string)
    }, [editorState]);

    if (type !== 'rich') return null;
    return <><Editor
        editorKey={key + ''}
        placeholder={rest.placeholder}
        onChange={setEditorState}
        editorState={editorState}
    /></>;
}

export function Input(params: InputParams) {
    const {formKey, name, value, ...rest} = params;
    const form                            = useContext(FormContext);
    const [localValue, update]            = useFormItemController(form, formKey ?? null);
    const {type = 'text'}                 = rest;
    const editor                          = useRichTextEditor(params, [localValue, update]);

    return (
        <React.Fragment>
            {
                type === 'rich'
                ? editor
                : type === 'spw'
                  ? (
                      <SpwEditor
                          value={localValue}
                          onChange={val => update(val)}
                      />
                  )
                  : (
                      <input {...rest}
                             type={type}
                             name={name}
                             value={localValue ?? ''}
                             onChange={e => update(e.target.value)}/>

                  )}
        </React.Fragment>
    );
}
