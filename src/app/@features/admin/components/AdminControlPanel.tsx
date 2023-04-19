import React from "react";
import { AdminNavigation } from "./AdminNavigation";
import { AdminRoutes } from "./AdminRoutes";

export function AdminControlPanel() {
  return (
    <>
      <AdminNavigation />
      <AdminRoutes />
    </>
  );
}
