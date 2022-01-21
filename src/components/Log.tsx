import React from 'react';


const isDev = false;
export function Log({children, error}: any) {
    if (!isDev) return null;
    return <pre className={error ? 'error' : ''}>{JSON.stringify(children, null, 3)}</pre>
}
