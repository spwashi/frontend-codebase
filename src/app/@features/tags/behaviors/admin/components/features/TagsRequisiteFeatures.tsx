import { TagFeatures } from "@features/tags/components/TagFeatures";
import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
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
