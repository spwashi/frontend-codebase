import React from "react";
import { AdminNavigation } from "./navigation/AdminNavigation";
import { AdminRoutes } from "./routes/AdminRoutes";

export function AdminControlPanel() {
  return (
    <>
      <AdminNavigation />
      <AdminRoutes />
    </>
  );
}
