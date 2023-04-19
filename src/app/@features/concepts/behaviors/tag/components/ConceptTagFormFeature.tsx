import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { ListQuery } from "@features/tags/services/graphql/list/components/ListQuery";
import {
  featureId__conceptDisplay,
  featureId__conceptTagForm,
  featureId__tagDisplay,
} from "../../../../../@/featureIds";
import { ConceptTagForm } from "./ConceptTagForm";

export function ConceptTagFormFeature() {
  return (
    <FeatureRequirement
      name={featureId__conceptDisplay}
      alternative={"Need Concepts Display"}
    >
      <FeatureRequirement
        name={featureId__tagDisplay}
        alternative={"Need Tags Display"}
      >
        <Feature name={featureId__conceptTagForm}>
          <ListQuery />
          <ConceptTagForm />
        </Feature>
      </FeatureRequirement>
    </FeatureRequirement>
  );
}
