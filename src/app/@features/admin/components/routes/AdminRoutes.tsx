import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import { UsersControlPanel } from "@features/users/behaviors/admin/components/UsersControlPanel";
import { ProjectsControlPanel } from "@features/projects/behaviors/admin/components/ProjectsControlPanel";
import { ConceptsControlPanel } from "@features/concepts/behaviors/admin/components/ConceptsControlPanel";
import { ScenesControlPanel } from "@features/scenes/behaviors/admin/components/ScenesControlPanel";
import { EventsControlPanel } from "@features/events/behaviors/admin/components/EventsControlPanel";
import { TagsControlPanel } from "@features/tags/behaviors/admin/components/TagsControlPanel";
import { AssetsControlPanel } from "@features/assets/behaviors/admin/components/AssetsControlPanel";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";

export function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={adminRoutes.root.absolutePath}
        element={
          <Routes>
            <Route
              path={getRouterPath(adminRoutes.users)}
              element={<UsersControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.projects)}
              element={<ProjectsControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.concepts)}
              element={<ConceptsControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.scenes)}
              element={<ScenesControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.events)}
              element={<EventsControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.tags)}
              element={<TagsControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.assets)}
              element={<AssetsControlPanel />}
            />
            <Route
              path={getRouterPath(adminRoutes.all)}
              element={
                <>
                  <LoginRequirement state={false}>
                    <Feature name={featureIds.admin.prelogin_admin}>
                      <UsersControlPanel />
                    </Feature>
                  </LoginRequirement>
                  <LoginRequirement>
                    <Feature name={featureIds.admin.postlogin_admin}>
                      <AssetsControlPanel />
                      <ConceptsControlPanel />
                      <EventsControlPanel />
                      <ScenesControlPanel />
                      <TagsControlPanel />
                    </Feature>
                  </LoginRequirement>
                </>
              }
            />
          </Routes>
        }
      />
    </Routes>
  );
}
