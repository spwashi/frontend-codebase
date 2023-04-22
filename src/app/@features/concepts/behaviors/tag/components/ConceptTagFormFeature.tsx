import React from "react";
import { Feature } from "@widgets/feature";
import { FeatureRequirement } from "@widgets/feature";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import { ConceptTagForm } from "./ConceptTagForm";
import {
  featureId__conceptDisplay,
  featureId__conceptTagForm,
} from "@/features/concepts/ids";
import { featureId__tagDisplay } from "@/features/tags/ids";

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
