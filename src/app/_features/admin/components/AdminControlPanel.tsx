import React from 'react';
import {AdminNav} from './AdminNav';
import {AdminRoutes} from './AdminRoutes';

export function AdminControlPanel() {
  return (
    <>
      <AdminNav/>
      <AdminRoutes/>
    </>
  );
}