import React from "react";
import { Feature } from "@widgets/feature";
import { ConceptListQuery } from "@features/concepts/services/graphql/list/components/ConceptListQuery";
import { ConceptEditForm } from "@features/concepts/behaviors/edit/components/ConceptEditForm";
import { featureIds } from "@/features/ids";

export function ConceptEditFormFeature() {
  return (
    <Feature name={featureIds.concept.create_form}>
      <ConceptListQuery />
      <ConceptEditForm />
    </Feature>
  );
}
