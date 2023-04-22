import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import {
  featureId__conceptDisplay,
  featureId__conceptTagForm,
  featureId__tagDisplay,
} from "@/featureIds";
import { ConceptTagForm } from "./ConceptTagForm";

export function ConceptTagFormFeature() {
  return (
    <FeatureRequirement name={featureId__conceptDisplay}>
      <FeatureRequirement name={featureId__tagDisplay}>
        <Feature name={featureId__conceptTagForm}>
          <TagListQuery />
          <ConceptTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
