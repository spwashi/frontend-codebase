import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import {
  featureId__eventDisplay,
  featureId__eventTagForm,
  featureId__tagDisplay,
} from "@/features/ids";
import { EventTagForm } from "./EventTagForm";

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
