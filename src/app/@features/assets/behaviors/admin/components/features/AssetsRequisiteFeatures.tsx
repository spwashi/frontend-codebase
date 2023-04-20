import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
import React from "react";

export function AssetsRequisiteFeatures() {
  return (
    <>
      <UserFeatures />
      <ProjectFeatures />
    </>
  );
}
