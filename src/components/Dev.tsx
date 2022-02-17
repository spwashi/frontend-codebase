import React from 'react';


function isDev() {
    return process.env.NODE_ENV === 'development';
}
export function Dev({children}: { children: any }) {
    if (isDev())
        return <>{children}</>;
    return null;
}