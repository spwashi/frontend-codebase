import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { Feature } from "@widgets/feature";
import { featureIDs } from "@/features/ids";
import { routes } from "src/app/@/routes";
import { UsersControlPanel } from "@features/users/behaviors/admin/components/UsersControlPanel";
import { ProjectsControlPanel } from "@features/projects/behaviors/admin/components/ProjectsControlPanel";
import { ConceptsControlPanel } from "@features/concepts/behaviors/admin/components/ConceptsControlPanel";
import { ScenesControlPanel } from "@features/scenes/behaviors/admin/components/ScenesControlPanel";
import { EventsControlPanel } from "@features/events/behaviors/admin/components/EventsControlPanel";
import { TagsControlPanel } from "@features/tags/behaviors/admin/components/TagsControlPanel";
import { AssetsControlPanel } from "@features/assets/behaviors/admin/components/AssetsControlPanel";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import {
  featureId__adminPostLogin,
  featureId__adminPreLogin,
} from "@/features/admin/ids";

export function AdminRoutes() {
  return (
    <Routes>
      <Route
        path={routes.admin.path}
        element={
          <Routes>
            <Route path="users/*" element={<UsersControlPanel />} />
            <Route path="projects/*" element={<ProjectsControlPanel />} />
            <Route path="concepts/*" element={<ConceptsControlPanel />} />
            <Route path="scenes/*" element={<ScenesControlPanel />} />
            <Route path="events/*" element={<EventsControlPanel />} />
            <Route path="tags/*" element={<TagsControlPanel />} />
            <Route path="assets/*" element={<AssetsControlPanel />} />
            <Route
              path="all/*"
              element={
                <>
                  <LoginRequirement state={false}>
                    <Feature name={featureIDs.admin.prelogin_admin}>
                      <UsersControlPanel />
                    </Feature>
                  </LoginRequirement>
                  <LoginRequirement>
                    <Feature name={featureIDs.admin.postlogin_admin}>
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
