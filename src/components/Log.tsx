import React from 'react';
import {Dev} from './Dev';
import {useSelector} from 'react-redux';


export function Log({children, error}: any) {
    return (
        <Dev>
            <pre className={error ? 'error' : ''}>{JSON.stringify(children, null, 3)}</pre>
        </Dev>
    )
}
export function State() {
    const state = useSelector(state => state)
    return (
        <Log>{state}</Log>
    )
}
