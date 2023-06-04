import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { EventFeatures } from "@features/events/components/EventFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";
import { appClassnames } from "@core/styles/classNames";

export function EventsRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <UserFeatures />
      <EventFeatures />
      <TagFeatures />
    </div>
  );
}
