import React from 'react';


export function isDev() {
  return import.meta.env.DEV;
}


export function getConfiguredDomain() {
  if (typeof process !== 'undefined') {
    const storybookName = process?.env.STORYBOOK_PROJECT_NAME;
    if (storybookName) {
      return storybookName;
    }
  }
  return import.meta.env.VITE_PROJECT_NAME;
}

export function Dev({children}: { children: any }) {
  if (!isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}

export function NotDev({children}: { children: any }) {
  if (isDev()) return null;
  return <>{typeof children === 'function' ? children() : children}</>;
}