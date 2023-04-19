import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { EventTagForm } from "./EventTagForm";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { ListQuery } from "@features/tags/services/graphql/list/components/ListQuery";
import {
  featureId__eventDisplay,
  featureId__eventTagForm,
  featureId__tagDisplay,
} from "../../../../../@/featureIds";

export function EventTagFormFeature() {
  return (
    <FeatureRequirement
      name={featureId__eventDisplay}
      alternative={"Need Events Display for TagEventForm"}
    >
      <FeatureRequirement
        name={featureId__tagDisplay}
        alternative={"Need Tags Display for Admin.TagEvent Form"}
      >
        <Feature name={featureId__eventTagForm}>
          <ListQuery />
          <EventTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
