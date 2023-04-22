import React from "react";
import { Feature } from "@widgets/feature";
import { ConceptListQuery } from "@features/concepts/services/graphql/list/components/ConceptListQuery";
import { ConceptEditForm } from "@features/concepts/behaviors/edit/components/ConceptEditForm";
import { featureId__conceptEditForm } from "@/features/ids";

export function ConceptEditFormFeature() {
  return (
    <Feature name={featureId__conceptEditForm}>
      <ConceptListQuery />
      <ConceptEditForm />
    </Feature>
  );
}
