import { ForumNavigation } from "@features/_demo/forum/components/navigation/variants/ForumNavigation";
import React from "react";
import { Route, Routes } from "react-router";
import {
  forumRoutes,
  getRelativeRouterPath,
  getRouterPath,
} from "@identities/routes";
import { ForumPosts } from "@features/_demo/forum/components/ForumPosts";

export function Forum() {
  return (
    <section>
      <header>
        <ForumNavigation />
      </header>
      {getRouterPath(forumRoutes.posts)}
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.posts)}
          element={<ForumPosts />}
        />
      </Routes>
    </section>
  );
}
