import React from "react";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import { EventTagForm } from "./EventTagForm";
import { featureIds } from "@/features/ids";

export function EventTagFormFeature() {
  return (
    <FeatureRequirement name={featureIds.event.display}>
      <FeatureRequirement name={featureIds.tag.display}>
        <Feature name={featureIds.event.tag_form}>
          <TagListQuery />
          <EventTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
