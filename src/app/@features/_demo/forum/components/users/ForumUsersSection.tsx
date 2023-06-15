import React, { useEffect, useState } from "react";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

type IForumUser = {
  id: string;
  name: string;
  username: string;
  profile_image_src: string;
};
export function ForumUsersSection() {
  const [users, setUsers] = useState<IForumUser[]>([]);
  useEffect(() => {
    fetch("http://localhost:3005/users").then(async (response) =>
      setUsers(await response.json())
    );
  }, []);

  return (
    <Feature name={featureIds.forum.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </Feature>
  );
}
