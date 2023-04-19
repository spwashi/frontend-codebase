import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/Features";
import React from "react";

export function AssetsRequisiteFeatures() {
  return (
    <>
      <UserFeatures />
      <ProjectFeatures />
    </>
  );
}
