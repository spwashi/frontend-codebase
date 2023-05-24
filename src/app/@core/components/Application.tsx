import React from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { AdminControlPanel } from "@features/admin/components/AdminControlPanel";
import { select_noGraphql } from "@services/redux/reducer";
import { LogAppReduxState } from "@core/dev/components/Log";
import { appClassnames } from "../styles/classNames";
import { Route, Routes } from "react-router";
import { useToggle } from "@core/hooks/useToggle";
import { SiteButton } from "@core/components/sites/SiteButton";

const canBeAdmin = true;
export function Application() {
  const noGraphql = useSelector(select_noGraphql);
  const className = classnames({
    noGraphql,
    [appClassnames.permissions.appCanBeAdmin]: canBeAdmin,
    [appClassnames.permissions.noAdmin]: !canBeAdmin,
  });
  const [isActivated, toggleState] = useToggle();

  return (
    <div id="application-container" className={className}>
      <div className="stage-open" aria-hidden="true" />
      <div className="app-wrapper">
        {canBeAdmin && <AdminControlPanel />}
        <main>
          <div className="app-wrapper">
            <div className="app-body">
              {canBeAdmin && <AdminControlPanel />}
              <Routes>
                <Route
                  path="/"
                  element={
                    <SiteButton
                      site={"boon"}
                      onClick={toggleState}
                      isActivated={isActivated}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </main>
        <LogAppReduxState />
      </div>
      <div className="stage-close" aria-hidden="true" />
    </div>
  );
}
