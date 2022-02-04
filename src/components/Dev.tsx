import React from 'react';


function isDev() {
    return false;
}
export function Dev({children}: { children: any }) {
    if (isDev())
        return <>{children}</>;
    return null;
}