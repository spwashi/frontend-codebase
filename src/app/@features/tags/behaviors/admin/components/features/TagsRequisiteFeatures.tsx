import { TagFeatures } from "@features/tags/components/Features";
import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/Features";
import React from "react";

export function TagsRequisiteFeatures() {
  return (
    <>
      <TagFeatures />
      <UserFeatures />
      <ProjectFeatures />
    </>
  );
}
