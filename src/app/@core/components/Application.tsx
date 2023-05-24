import React from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { AdminControlPanel } from "@features/admin/components/AdminControlPanel";
import { select_noGraphql } from "@services/redux/reducer";
import { Log } from "@core/dev/components/Log";
import { appClassnames } from "../styles/classNames";
import { Route, Routes } from "react-router";
import { DefaultPage } from "@core/routes/DefaultPage";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

const canBeAdmin = true;

export function Application() {
  const noGraphql = useSelector(select_noGraphql);
  const className = classnames({
    noGraphql,
    [appClassnames.permissions.appCanBeAdmin]: canBeAdmin,
    [appClassnames.permissions.noAdmin]: !canBeAdmin,
  });

  return (
    <div id="application-container" className={className}>
      <div className="stage-open" aria-hidden="true" />
      <div className="app-wrapper">
        {canBeAdmin && <AdminControlPanel />}
        <div className="app-body">
          <Routes>
            <Route path="/" element={<DefaultPage />} />
          </Routes>
        </div>
        <LogAppReduxState />
      </div>
      <div className="stage-close" aria-hidden="true" />
    </div>
  );
}

function LogAppReduxState({ open }: { open?: boolean }) {
  const state = useSelector((state) => state);
  return (
    <Feature name={featureIds.app.application_state}>
      <Log title="App State" style={"json"} open={open}>
        {state}
      </Log>
    </Feature>
  );
}
