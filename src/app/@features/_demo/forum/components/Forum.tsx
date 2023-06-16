import { ForumNavigation } from "@features/_demo/forum/components/navigation/ForumNavigation";
import React from "react";
import { Route, Routes } from "react-router";
import { forumRoutes, getRelativeRouterPath } from "@identities/routes";
import { ForumPostsSection } from "@features/_demo/forum/components/posts/ForumPostsSection";
import { ForumCommentsSection } from "@features/_demo/forum/components/comments/ForumCommentsSection";
import { ForumUsersSection } from "@features/_demo/forum/components/users/ForumUsersSection";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import { ForumLoginSection } from "@features/_demo/forum/components/session/login/ForumLoginSection";
import { ForumLogoutSection } from "@features/_demo/forum/components/session/logout/ForumLogoutSection";
import { ForumSessionStatusSection } from "@features/_demo/forum/components/session/ForumSessionStatusSection";

export function Forum() {
  return (
    <Feature name={featureIds.forum.forum}>
      <header>
        <ForumNavigation />
      </header>
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.posts)}
          element={<ForumPostsSection />}
        />
        <Route
          path={getRelativeRouterPath(forumRoutes.comments)}
          element={<ForumCommentsSection />}
        />
        <Route
          path={getRelativeRouterPath(forumRoutes.users)}
          element={<ForumUsersSection />}
        />
        <Route
          path={getRelativeRouterPath(forumRoutes.login)}
          element={<ForumLoginSection />}
        />
        <Route
          path={getRelativeRouterPath(forumRoutes.logout)}
          element={<ForumLogoutSection />}
        />
        <Route
          path={getRelativeRouterPath(forumRoutes.sessionStatus)}
          element={<ForumSessionStatusSection />}
        />
      </Routes>
    </Feature>
  );
}
