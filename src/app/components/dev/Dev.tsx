import React from 'react';


export function isDev() {
  return process.env.NODE_ENV === 'development';
}


export function getConfiguredDomain() {
  return process.env.STORYBOOK_PROJECT_NAME || process.env.REACT_APP_PROJECT_NAME;
}

export function getDevObject() {
  // @ts-ignore
  return window.__dev = window.__dev || {};
}

export function Dev({children}: { children: any }) {
  if (!isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}

export function NotDev({children}: { children: any }) {
  if (isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}