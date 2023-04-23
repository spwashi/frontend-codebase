import React from "react";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { TagListQuery } from "@features/tags/services/graphql/list/components/TagListQuery";
import { ConceptTagForm } from "./ConceptTagForm";
import { featureIds } from "@/features/ids";

export function ConceptTagFormFeature() {
  return (
    <FeatureRequirement name={featureIds.concept.display}>
      <FeatureRequirement name={featureIds.tag.display}>
        <Feature name={featureIds.concept.tag_form}>
          <TagListQuery />
          <ConceptTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
