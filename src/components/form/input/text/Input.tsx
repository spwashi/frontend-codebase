import React, {useContext, useEffect, useMemo} from 'react';
import {useFormItemController} from '../../hooks/useFormItemController';
import {FormContext} from '../../FormContext';
import styles from '../styles/input.module.scss'
import SpwEditor from '../../../spw/SpwEditor';
import {convertFromRaw, convertToRaw, Editor, EditorState} from 'draft-js';

type InputParams =
    { formKey?: string }
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({formKey, name, value, ...rest}: InputParams) {
    const form                          = useContext(FormContext);
    const [localValue, update]          = useFormItemController(form, formKey ?? null);
    const {type = 'text'}               = rest;
    const [editorState, setEditorState] =
              React.useState(() => {
                  try {
                      const prev = JSON.parse('' + (value ?? ''));
                      return EditorState.createWithContent(convertFromRaw(prev))
                  } catch (e) {

                  }
                  return EditorState.createEmpty();
              });
    useEffect(() => {
        update(value);
        try {
            const prev = JSON.parse('' + (value ?? ''));
            console.log({prev})
        } catch (e) {
            console.log('val', value)
        }
    }, [value]);


    useEffect(() => {
        const curr = editorState.getCurrentContent();
        update(type === 'rich' ? JSON.stringify(convertToRaw(curr)) : localValue)
    }, [editorState]);
    const key = useMemo(() => Date.now(), []);
    const id  = useMemo(() => `input--${Math.random()}`.replace('.', ''), []);

    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id}>{rest.title ?? rest.placeholder}</label>
            {/*<Log>{editorState}</Log>*/}
            {
                type === 'rich'
                ? <Editor
                    editorKey={key + ''}
                    placeholder={rest.placeholder}
                    onChange={setEditorState}
                    editorState={editorState}
                />
                : type === 'spw'
                  ? <SpwEditor value={localValue} onChange={val => update(val)}/>
                  : <input {...rest}
                           id={id}
                           type={type}
                           name={name}
                           value={value ?? localValue ?? ''}
                           onChange={e => update(e.target.value)}/>
            }
        </div>
    );
}
