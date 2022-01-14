import React from 'react';

export function Log({children, error}: any) {
    return <pre className={error ? 'error' : ''}>{JSON.stringify(children, null, 3)}</pre>
}
