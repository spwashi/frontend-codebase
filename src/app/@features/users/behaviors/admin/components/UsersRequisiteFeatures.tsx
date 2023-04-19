import { ProjectFeatures } from "@features/projects/components/Features";
import { UserFeatures } from "@features/users/components/Features";
import React from "react";

/**
 * Requirements for the User feature
 */
export function UsersRequisiteFeatures() {
  return (
    <>
      <ProjectFeatures />
      <UserFeatures />
    </>
  );
}
