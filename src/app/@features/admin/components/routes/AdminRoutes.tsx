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
import { routerCategories } from "@identities/routes/helpers/routerCategories";
import { adminRoutes as routes } from "@identities/routes/domains/adminRoutes";

export function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={routerCategories.admin.path}
        element={
          <Routes>
            <Route path={routes.users.path} element={<UsersControlPanel />} />
            <Route
              path={routes.projects.path}
              element={<ProjectsControlPanel />}
            />
            <Route
              path={routes.concepts.path}
              element={<ConceptsControlPanel />}
            />
            <Route path={routes.scenes.path} element={<ScenesControlPanel />} />
            <Route path={routes.events.path} element={<EventsControlPanel />} />
            <Route path={routes.events.path} element={<TagsControlPanel />} />
            <Route path={routes.assets.path} element={<AssetsControlPanel />} />
            <Route
              path={routes.all.path}
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
