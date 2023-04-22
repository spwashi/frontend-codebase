import React from "react";
import { Feature } from "@widgets/feature";
import { FeatureRequirement } from "@widgets/feature";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import { EventTagForm } from "./EventTagForm";
import {
  featureId__eventDisplay,
  featureId__eventTagForm,
} from "@/features/events/ids";
import { featureId__tagDisplay } from "@/features/tags/ids";

export function EventTagFormFeature() {
  return (
    <FeatureRequirement name={featureId__eventDisplay}>
      <FeatureRequirement name={featureId__tagDisplay}>
        <Feature name={featureId__eventTagForm}>
          <TagListQuery />
          <EventTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
