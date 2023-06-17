import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import React from "react";

export function ForumSessionStatusSection() {
  return (
    <Feature name={featureIds.forum.userSessionStatus}>
      [not yet implemented: {featureIds.forum.userSessionStatus}]
    </Feature>
  );
}
