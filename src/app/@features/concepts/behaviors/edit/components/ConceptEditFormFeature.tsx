import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { ConceptListQuery } from "@features/concepts/services/graphql/list/components/ConceptListQuery";
import { ConceptEditForm } from "@features/concepts/behaviors/edit/components/ConceptEditForm";
import { featureId__conceptEditForm } from "../../../../../@/featureIds";

export function ConceptEditFormFeature() {
  return (
    <Feature name={featureId__conceptEditForm}>
      <ConceptListQuery />
      <ConceptEditForm />
    </Feature>
  );
}
