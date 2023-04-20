import { UserFeatures } from "@features/users/components/Features";
import { EventFeatures } from "@features/events/components/EventFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";
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
