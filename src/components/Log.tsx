import React from 'react';
import {Dev} from './Dev';
import {useSelector} from 'react-redux';

import ReactJson from 'react-json-view'

type StyleOptions =
    'json'
    | 'plain';

export function Log({
                        children,
                        style = 'json',
                        open,
                        error,
                        title,
                    }: { style?: StyleOptions, open?: boolean, children: any, title?: string, error?: any }) {
    return (
        <Dev>
            <details open={open} className={'dev-log ' + (error ? 'error' : '')}>
                {title && <summary>{title}</summary>}
                {
                    children && (
                        style === 'json'
                        ? <ReactJson collapsed src={JSON.parse(JSON.stringify(children))}/>
                        : <pre>{JSON.stringify(children, null, 3)}</pre>
                    )
                }
            </details>
        </Dev>
    )
}

export function LogAppReduxState({open, style}: { style?: StyleOptions, open?: boolean }) {
    const state = useSelector(state => state)
    return (
        <Log title={'App State'} style={style} open={open}>{state}</Log>
    )
}
