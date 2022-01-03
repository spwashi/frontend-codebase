import React from 'react';

export function Log({children}: any) {
    return <pre>{JSON.stringify(children, null, 3)}</pre>
}