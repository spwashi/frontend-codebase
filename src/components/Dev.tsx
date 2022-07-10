import React from 'react';


export function isDev() {
  return process.env.NODE_ENV === 'development';
}
export function Dev({children}: { children: any }) {
  if (!isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}

export function NotDev({children}: { children: any }) {
  if (isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}