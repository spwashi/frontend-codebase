import { ForumNavigation } from "@features/_demo/forum/components/navigation/ForumNavigation";
import React from "react";
import { Route, Routes } from "react-router";
import { forumRoutes, getRelativeRouterPath } from "@identities/routes";
import { ForumPostsSection } from "@features/_demo/forum/components/posts/ForumPostsSection";
import { ForumCommentsSection } from "@features/_demo/forum/components/comments/ForumCommentsSection";
import { ForumUsersSection } from "@features/_demo/forum/components/users/ForumUsersSection";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

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
      </Routes>
    </Feature>
  );
}
