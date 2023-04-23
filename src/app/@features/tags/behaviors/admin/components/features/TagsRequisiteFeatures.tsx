import React from "react";
import { TagFeatures } from "@features/tags/components/TagFeatures";
import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";

export function TagsRequisiteFeatures() {
  return (
    <>
      <TagFeatures />
      <UserFeatures />
      <ProjectFeatures />
    </>
  );
}
