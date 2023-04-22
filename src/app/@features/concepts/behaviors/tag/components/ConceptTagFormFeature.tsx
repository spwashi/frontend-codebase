import React from "react";
import { Feature } from "@widgets/feature";
import { FeatureRequirement } from "@widgets/feature";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import {
  featureId__conceptDisplay,
  featureId__conceptTagForm,
  featureId__tagDisplay,
} from "@/features/ids";
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
