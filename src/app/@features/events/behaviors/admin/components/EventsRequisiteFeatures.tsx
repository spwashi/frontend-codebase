import { UserFeatures } from "@features/users/components/Features";
import { EventFeatures } from "@features/events/components/Features";
import { TagFeatures } from "@features/tags/components/Features";
import React from "react";

export function EventsRequisiteFeatures() {
  return (
    <>
      <UserFeatures />
      <EventFeatures />
      <TagFeatures />
    </>
  );
}
