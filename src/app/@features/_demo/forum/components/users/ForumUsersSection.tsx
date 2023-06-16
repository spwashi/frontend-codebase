import React, { useEffect, useState } from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import {
  forumRoutes,
  getRelativeRouterPath,
  getRouterPath,
} from "@identities/routes";
import { Link } from "react-router-dom";
import { Route, Routes, useParams } from "react-router";
import { forumClassNames } from "@features/_demo/forum/classNames";

type IForumUser = {
  id: string;
  name: string;
  username: string;
  profile_image_src: string;
};
function ForumUserProfilePage() {
  const { username } = useParams();
  return <Feature name={featureIds.forum.userProfile}>{username}</Feature>;
}

interface ForumUsersListParams {
  users: IForumUser[];
}

function ForumUsersList({ users }: ForumUsersListParams) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className={forumClassNames.forumUser.listItem}>
          <div className={forumClassNames.forumUser.base}>
            <Link to={getRouterPath(forumRoutes.userProfile, user.username)}>
              {user.username}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
export function ForumUsersSection() {
  const [users, setUsers] = useState<IForumUser[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/users").then(async (response) =>
      setUsers(await response.json())
    );
  }, []);

  return (
    <Feature name={featureIds.forum.users}>
      <ForumUsersList users={users} />
      <Routes>
        <Route
          path={getRelativeRouterPath(forumRoutes.userProfile)}
          element={<ForumUserProfilePage />}
        />
      </Routes>
    </Feature>
  );
}
